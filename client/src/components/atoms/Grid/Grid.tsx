import { HTMLElementType, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type GridProps = PropsWithChildren<{
  as?: HTMLElementType;
  className?: string;
}>;

export default function Grid({ as = "div", className, children }: GridProps) {
  const Tag = as;
  return (
    <Tag className={`${styles.grid}${className ? ` ${className}` : ""}`}>
      {children}
    </Tag>
  );
}
