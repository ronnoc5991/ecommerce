import { notFound } from "next/navigation";
import { AudienceSchema } from "shared";
import catalogService from "@/services/catalog";
import { productToProducts } from "@/transformers";
import ProductListingPage, {
  ProductListingPageProps,
} from "@/components/templates/ProductListingPage/ProductListingPage";

export default async function AudienceCategoryProductListingPage(
  props: PageProps<"/[audience]/[category]">,
) {
  const { audience, category } = await props.params;

  const parsedAudience = AudienceSchema.safeParse(audience.toUpperCase());

  if (!parsedAudience.success) {
    notFound();
  }

  const response = await catalogService.category.getOne({
    slug: category,
    audience: parsedAudience.data,
  });

  if (!response.ok) {
    notFound();
  }

  const sections = response.data.products.reduce<
    ProductListingPageProps["sections"]
  >((acc, product) => {
    return [
      ...acc,
      {
        id: product.id.toString(),
        title: product.name,
        products: productToProducts(product),
      },
    ];
  }, []);

  return <ProductListingPage sections={sections}></ProductListingPage>;
}
