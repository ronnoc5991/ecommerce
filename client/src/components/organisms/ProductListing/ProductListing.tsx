"use client";

import clsx from "clsx";
import { useRef } from "react";
import { Product } from "@/types";
import { useIsSticky } from "@/hooks/useIsSticky";
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
  const titleElement = useRef<HTMLDivElement | null>(null);
  const isTitleSticky = useIsSticky(titleElement);

  return (
    <div className={styles["product-listing"]}>
      <div
        className={clsx(styles.title, isTitleSticky && styles["title--sticky"])}
        ref={titleElement}
      >
        <Typography as="h2">{title}</Typography>
      </div>
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
