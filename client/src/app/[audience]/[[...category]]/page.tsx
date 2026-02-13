import ProductListingPage from "@/components/templates/ProductListingPage/ProductListingPage";

export default async function AudienceCategoryProductListingPage(
  props: PageProps<"/[audience]/[[...category]]">,
) {
  const { audience, category } = await props.params;
  const categorySlug = category?.[0];

  // TODO: fetch the products with the audience and possibly the category slug

  return <ProductListingPage products={[]}></ProductListingPage>;
}
