import { notFound } from "next/navigation";
import { AudienceSchema } from "shared";
import services from "@/services";
import { toProduct } from "@/transformers";
import ProductListingPage, {
  ProductListingPageProps,
} from "@/components/templates/ProductListingPage/ProductListingPage";

export default async function AudienceProductListingPage(
  props: PageProps<"/[audience]">,
) {
  const { audience } = await props.params;

  const result = AudienceSchema.safeParse(audience.toUpperCase());

  if (!result.success) {
    notFound();
  }

  const response = await services.catalog.catalog.get({
    audience: result.data,
  });

  if (!response.ok) {
    // TODO: temp... need to handle this differently
    notFound();
  }

  const sections = response.data.categories.reduce<
    ProductListingPageProps["sections"]
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
