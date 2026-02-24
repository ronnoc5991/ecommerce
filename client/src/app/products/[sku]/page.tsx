import catalogService from "@/services/catalog";
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
  // TODO: this endpoint needs to take a variant sku and return... variant with product?
  // or the product with the variant?
  const response = await catalogService.products.getOne(sku);

  return (
    <div>
      {sku}
      {response.ok && response.data.name}
    </div>
  );
}
