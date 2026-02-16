import { HTMLElementType, PropsWithChildren } from "react";
import { PropsWithClassName } from "@/types/component";
import styles from "./styles.module.scss";

type GridProps = PropsWithClassName<
  PropsWithChildren<{
    as?: HTMLElementType;
  }>
>;

export default function Grid({ as = "div", className, children }: GridProps) {
  const Tag = as;
  return (
    <Tag className={`${styles.grid}${className ? ` ${className}` : ""}`}>
      {children}
    </Tag>
  );
}
