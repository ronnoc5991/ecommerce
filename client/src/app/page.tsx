import styles from "./page.module.css";

export default async function Home() {
  const response = await fetch("http://server:3000/products");
  const data = await response.json();
  console.log(data);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {data.map((product) => (
          <li>{product.name}</li>
        ))}
      </main>
    </div>
  );
}
