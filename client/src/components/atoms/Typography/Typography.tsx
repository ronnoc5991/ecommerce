import { PropsWithChildren } from "react";
import { PropsWithClassName } from "@/types/component";
import clsx from "clsx";

type TypographyProps = PropsWithClassName<
  PropsWithChildren<{
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  }>
>;

export default function Typography({
  as,
  children,
  className,
}: TypographyProps) {
  const Tag = as;
  return <Tag className={clsx(className)}>{children}</Tag>;
}
