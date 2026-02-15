import styles from "./styles.module.scss";

type ColorSwatchProps = { hex: string };

export default function ColorSwatch({ hex }: ColorSwatchProps) {
  return (
    <div className={styles["color-swatch"]} style={{ backgroundColor: hex }} />
  );
}
