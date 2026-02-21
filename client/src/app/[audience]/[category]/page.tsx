import { notFound } from "next/navigation";
import { AudienceSchema } from "shared";
import { Product } from "@/types";
import apiClient from "@/api-client";
import { toProduct } from "@/transformers";
import ProductListingPage from "@/components/templates/ProductListingPage/ProductListingPage";

export default async function AudienceCategoryProductListingPage(
  props: PageProps<"/[audience]/[category]">,
) {
  const { audience, category } = await props.params;
  // const categorySlug = category?.[0];

  const result = AudienceSchema.safeParse(audience.toUpperCase());

  if (!result.success) {
    notFound();
  }

  const response = await apiClient.catalog.get({ audience: result.data });

  if (!response.ok) {
    // TODO: temp... need to handle this differently
    notFound();
  }

  const sections = response.data.categories.reduce<
    Array<{ id: string; title: string; products: Array<Product> }>
  >((acc, category) => {
    return [
      ...acc,
      {
        id: category.id.toString(),
        title: category.name,
        products: category.products.map(toProduct),
      },
    ];
  }, []);

  return <ProductListingPage sections={sections}></ProductListingPage>;
}
