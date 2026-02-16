import { Product, ProductVariant } from "@/types";
import { ProductVariantDTO, ProductWithVariantsDTO } from "shared";

function formatPrice(cents: number) {
  const hasCents = cents % 100 !== 0;

  return new Intl.NumberFormat("en-us", {
    style: "decimal",
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: hasCents ? 2 : 0,
  }).format(cents / 100);
}

function formatProductVariant(
  productVariantDTO: ProductVariantDTO,
): ProductVariant {
  return {
    color: productVariantDTO.color,
    price: formatPrice(productVariantDTO.price),
    sku: productVariantDTO.sku,
  };
}

export function toProduct(productDTO: ProductWithVariantsDTO): Product {
  return {
    id: productDTO.id,
    name: productDTO.name,
    defaultVariant: formatProductVariant(productDTO.defaultVariant),
    variants: productDTO.variants.map(formatProductVariant),
  };
}
