import { PropsWithChildren } from "react";
import { PropsWithClassName } from "@/types/component";

type TypographyProps = PropsWithClassName<
  PropsWithChildren<{
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  }>
>;

export default function Typography({
  as,
  className,
  children,
}: TypographyProps) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}
