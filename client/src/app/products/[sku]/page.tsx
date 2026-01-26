export default async function ProductDetailPage(
  props: PageProps<"/products/[sku]">,
) {
  const { sku } = await props.params;
  return <div>{sku}</div>;
}
