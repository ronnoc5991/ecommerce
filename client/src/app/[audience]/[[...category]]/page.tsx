import { notFound } from "next/navigation";
import { AudienceSchema } from "shared";
import apiClient from "@/api-client";
import { toProduct } from "@/transformers";
import ProductListing from "@/components/organisms/ProductListing/ProductListing";

export default async function AudienceCategoryProductListingPage(
  props: PageProps<"/[audience]/[[...category]]">,
) {
  const { audience, category } = await props.params;
  // const categorySlug = category?.[0];

  const result = AudienceSchema.safeParse(audience.toUpperCase());

  if (!result.success) {
    notFound();
  }

  const response = await apiClient.catalog.get({ audience: result.data });

  return (
    <>
      {response.ok &&
        response.data.categories.map((category) => {
          return (
            <ProductListing
              key={category.id}
              title={category.name}
              products={category.products.map(toProduct)}
            ></ProductListing>
          );
        })}
    </>
  );
}
