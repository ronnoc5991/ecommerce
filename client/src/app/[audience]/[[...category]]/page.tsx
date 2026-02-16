import { notFound } from "next/navigation";
import { AudienceSchema } from "shared";
import apiClient from "@/api-client";
import ProductListingPage from "@/components/templates/ProductListingPage/ProductListingPage";
import { toProduct } from "@/transformers";

export default async function AudienceCategoryProductListingPage(
  props: PageProps<"/[audience]/[[...category]]">,
) {
  const { audience, category } = await props.params;
  // const categorySlug = category?.[0];

  const result = AudienceSchema.safeParse(audience.toUpperCase());

  if (!result.success) {
    notFound();
  }

  const response = await apiClient.product.getAll({ audience: result.data });

  return (
    <>
      {response.ok && (
        <ProductListingPage
          products={response.data.map(toProduct)}
        ></ProductListingPage>
      )}
    </>
  );
}
