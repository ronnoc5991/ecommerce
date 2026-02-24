import { Product, ProductColor } from "@/types";
import { ProductWithVariantsDTO } from "shared";

function formatPrice(cents: number) {
  const hasCents = cents % 100 !== 0;

  return new Intl.NumberFormat("en-us", {
    style: "decimal",
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: hasCents ? 2 : 0,
  }).format(cents / 100);
}

export function productToProducts(
  productDTO: ProductWithVariantsDTO,
): Array<Product> {
  const uniqueAvailableColors = new Set<ProductColor>();
  productDTO.variants.forEach((v) => uniqueAvailableColors.add(v.color));

  // the problem is not how we got the colors...
  // we are going over every variant... including size
  // we don't really want to do that with size...
  // we just want each unique variant where unique is a color
  // do not duplicate for each size...

  // const availableColors = productDTO.variants.map((v) => v.color);
  // need to get all of the colors from the variants...
  return productDTO.variants.map(({ sku, priceCents, color }) => ({
    sku,
    color,
    name: productDTO.name,
    price: formatPrice(priceCents),
    availableColors: Array.from(uniqueAvailableColors),
  }));
}

export function toProduct(productDTO: ProductWithVariantsDTO): Product {
  return {
    name: productDTO.name,
    sku: productDTO.defaultVariant.sku,
    color: productDTO.defaultVariant.color,
    price: formatPrice(productDTO.defaultVariant.priceCents),
    availableColors: productDTO.variants.map((v) => v.color),
  };
}
