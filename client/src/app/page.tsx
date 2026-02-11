import apiClient from "@/api-client";
import styles from "./page.module.css";

export default async function Home() {
  const response = await apiClient.product.getAll();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {response.ok && response.data.map((product) => <li>{product.name}</li>)}
      </main>
    </div>
  );
}
