import { PropsWithChildren } from "react";

type TypographyProps = PropsWithChildren<{
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}>;

export default function Typography({ as, children }: TypographyProps) {
  const Tag = as;
  return <Tag>{children}</Tag>;
}
