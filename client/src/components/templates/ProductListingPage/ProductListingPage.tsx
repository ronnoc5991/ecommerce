import ProductListing from "@/components/organisms/ProductListing/ProductListing";
import { Product } from "@/types";
import styles from "./styles.module.scss";

type Section = {
  id: string;
  title: string;
  products: Array<Product>;
};

export type ProductListingPageProps = {
  sections: Array<Section>;
};

export default async function ProductListingPage({
  sections,
}: ProductListingPageProps) {
  return (
    <div className={styles["product-listing-page"]}>
      {sections.map(({ title, products }) => {
        return (
          <section key={title}>
            <ProductListing title={title} products={products}></ProductListing>
          </section>
        );
      })}
    </div>
  );
}
