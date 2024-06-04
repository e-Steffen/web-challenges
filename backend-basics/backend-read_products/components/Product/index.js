import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);
  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <aside>
        <h4>some buyers feelings about this fish</h4>
        {data.reviews && data.reviews.length > 0 ? (
          <ol>
            {data.reviews.map((review) => (
              <li key={review.id}>
                {review.title} | ✩ {review.rating}
                <p>{review.text}</p>
              </li>
            ))}
          </ol>
        ) : (
          <li>no feelings so far</li>
        )}
      </aside>
      <br></br>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
