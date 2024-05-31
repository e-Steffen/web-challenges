import useSWR from "swr";
import { useRouter } from "next/router";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductInDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data: singleProduct, isLoading } = useSWR(
    `/api/products/${id}`,
    fetcher
  );

  if (isLoading) return <p>is loading...</p>;
  if (!singleProduct) return <p>sorry, an error...</p>;

  return (
    <article>
      <h1>{singleProduct.name}</h1>
      <p>{singleProduct.description}</p>
      <p>{singleProduct.price} Euro</p>
    </article>
  );
}
