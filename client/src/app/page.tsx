import apiClient from "@/api-client";

export default async function Home() {
  const response = await apiClient.product.getAll();

  return (
    <div>
      <main>
        {response.ok && response.data.map((product) => <li>{product.name}</li>)}
      </main>
    </div>
  );
}
