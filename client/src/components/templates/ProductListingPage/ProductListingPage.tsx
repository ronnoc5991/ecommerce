import { Product } from "@/types";
import ProductCard from "@/components/organisms/ProductCard/ProductCard";

type ProductListingPageProps = {
  products: Array<Product>;
};

export default function ProductListingPage({
  products,
}: ProductListingPageProps) {
  return (
    <div>
      {products.map((product) => (
        <a key={product.id} href={`/products/${product.defaultVariant.sku}`}>
          <ProductCard product={product} />
        </a>
      ))}
    </div>
  );
}
