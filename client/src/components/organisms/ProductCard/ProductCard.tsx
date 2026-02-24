import { Product } from "@/types";
import Typography from "@/components/atoms/Typography/Typography";
import ColorSwatch from "@/components/atoms/ColorSwatch/ColorSwatch";
import styles from "./styles.module.scss";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const firstThreeVariantColors = product.availableColors.slice(0, 3);
  const additionalVariantCount = product.availableColors.length - 3;

  return (
    <div className={styles["product-card"]}>
      <div className={styles.image}></div>
      <div className={styles.details}>
        <div className={styles["product-details"]}>
          <Typography as="span">{product.name}</Typography>
          <Typography as="span">{product.price} USD</Typography>
        </div>
        <div className={styles["variant-details"]}>
          <div>
            <Typography as="span">{product.color.name}</Typography>
          </div>
          <div className={styles["variant-colors"]}>
            <div className={styles["color-swatches"]}>
              {firstThreeVariantColors.map(({ hex }) => (
                <ColorSwatch key={hex} hex={hex} />
              ))}
            </div>
            {additionalVariantCount > 0 && (
              <Typography as="span">+{additionalVariantCount}</Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
