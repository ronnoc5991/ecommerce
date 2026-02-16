import { HTMLElementType, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type GridProps = PropsWithChildren<{
  as?: HTMLElementType;
}>;

export default function Grid({ as = "div", children }: GridProps) {
  const Tag = as;
  return <Tag className={styles.grid}>{children}</Tag>;
}
