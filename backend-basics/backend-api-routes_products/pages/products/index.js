import { useRouter } from "next/router";
import useSWR from "swr";

export default function ListOfAllProducts() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: allProducts, isLoading } = useSWR("/api/products/", fetcher);

  if (isLoading) {
    return <p>is loading...</p>;
  }

  if (!allProducts) {
    return <p>sorry, an error...</p>;
  }
  return (
    <ul>
      {allProducts.map((product) => {
        return (
          <li key={product.id}>
            <p> {product.name}</p>
            <p>{product.description}</p>
            <p>{product.price} Euro</p>
          </li>
        );
      })}
    </ul>
  );
}
