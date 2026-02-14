import { notFound } from "next/navigation";
import { AudienceSchema } from "shared";
import apiClient from "@/api-client";
import ProductListingPage from "@/components/templates/ProductListingPage/ProductListingPage";

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

  // TODO: include category slug later
  // what about categories? Do we have an enum for that? No... should we?  Not sure...

  return (
    <>
      {response.ok &&
        response.data.map((product) => (
          <div>
            {product.name}
            {product.variants.map((variant) => (
              <div>
                {variant.color} {variant.price}
              </div>
            ))}
          </div>
        ))}
      <ProductListingPage products={[]}></ProductListingPage>
    </>
  );
}
