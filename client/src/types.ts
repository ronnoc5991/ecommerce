export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  sku: string;
  name: string;
  price: string;
  color: ProductColor;
  availableColors: Array<ProductColor>;
};

export type ProductVariant = {
  color: {
    name: string;
    hex: string;
  };
};
