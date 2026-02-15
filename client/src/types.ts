export type Product = {
  id: number;
  name: string;
  defaultVariant: ProductVariant;
  variants: Array<ProductVariant>;
};

export type ProductVariant = {
  sku: string;
  price: string;
  color: {
    name: string;
    hex: string;
  };
};
