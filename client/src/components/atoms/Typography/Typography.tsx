import { PropsWithChildren } from "react";

type TypographyProps = PropsWithChildren<{
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
}>;

export default function Typography({
  as,
  className,
  children,
}: TypographyProps) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}
