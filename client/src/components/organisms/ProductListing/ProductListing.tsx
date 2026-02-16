import { Product } from "@/types";
import Grid from "@/components/atoms/Grid/Grid";
import Typography from "@/components/atoms/Typography/Typography";
import ProductCard from "@/components/organisms/ProductCard/ProductCard";
import styles from "./styles.module.scss";

type ProductListingProps = {
  title: string;
  products: Array<Product>;
};

export default function ProductListing({
  title,
  products,
}: ProductListingProps) {
  return (
    <div className={styles["product-listing"]}>
      <Typography as="h2" className={styles.title}>
        {title}
      </Typography>
      <Grid as="ul" className={styles.list}>
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/products/${product.defaultVariant.sku}`}>
              <ProductCard product={product} />
            </a>
          </li>
        ))}
      </Grid>
    </div>
  );
}
