import { Product } from "@/types";
import ProductCard from "@/components/organisms/ProductCard/ProductCard";
import Grid from "@/components/atoms/Grid/Grid";

type ProductListingPageProps = {
  products: Array<Product>;
};

export default function ProductListingPage({
  products,
}: ProductListingPageProps) {
  return (
    <Grid>
      {products.map((product) => (
        <a key={product.id} href={`/products/${product.defaultVariant.sku}`}>
          <ProductCard product={product} />
        </a>
      ))}
    </Grid>
  );
}
