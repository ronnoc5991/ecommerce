// given a product variant's sku
// fetch its parent product?
// get parent product by child sku?
// we want to display this variant as 'selected'
// AND we want to display the other variants as links from this page

// lookup the variant by sku...
// get its product
export default async function ProductDetailPage(
  props: PageProps<"/products/[sku]">,
) {
  const { sku } = await props.params;
  return <div>{sku}</div>;
}
