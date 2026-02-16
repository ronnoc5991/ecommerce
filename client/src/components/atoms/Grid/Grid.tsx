import { HTMLElementType, PropsWithChildren } from "react";
import { PropsWithClassName } from "@/types/component";
import clsx from "clsx";
import styles from "./styles.module.scss";

type GridProps = PropsWithClassName<
  PropsWithChildren<{
    as?: HTMLElementType;
  }>
>;

export default function Grid({ as = "div", className, children }: GridProps) {
  const Tag = as;
  return <Tag className={clsx(styles.grid, className)}>{children}</Tag>;
}
