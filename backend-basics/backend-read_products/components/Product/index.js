import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

import ReviewForm from "../ReviewForm";

import { StyledButton } from "../Button/Button.styled";
import { useState } from "react";
import ProductForm from "../ProductForm";

export default function Product() {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedProductData = Object.fromEntries(formData);

    const response = await fetch(`api/products/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedProductData),
    });

    if (response.ok) {
      mutate();
      router.push("/");
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/");
    } else return response.status(404).json({ status: response.status });
  }

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

      {isUpdateMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          value={data}
          isUpdateMode={true}
        />
      )}

      <StyledButton
        type="button"
        onClick={() => {
          setIsUpdateMode(!isUpdateMode);
        }}
      >
        Need a Fish-Update?
      </StyledButton>

      <StyledButton
        type="button"
        onClick={() => {
          handleDeleteProduct();
        }}
      >
        Swim away, ugly fish!
      </StyledButton>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
<ReviewForm />

  );
}
