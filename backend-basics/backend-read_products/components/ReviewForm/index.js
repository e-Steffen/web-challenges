import {
  StyledForm,
  StyledHeading,
  StyledLabel,
} from "../ProductForm/ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";
import useSWR from "swr";

export default function ReviewForm() {
  const { mutate } = useSWR("/api/reviews");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const reviewData = Object.fromEntries(formData);

    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    });
    if (response.ok) {
      mutate();
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add a new Review</StyledHeading>
      <StyledLabel htmlFor="title">
        Title:
        <input type="text" id="title" name="title" />
      </StyledLabel>
      <StyledLabel htmlFor="text">
        Your Review:
        <input type="text" id="text" name="text" />
      </StyledLabel>
      <StyledLabel htmlFor="rating">
        Rating:
        <input type="number" id="rating" name="rating" min="1" max="5" />
      </StyledLabel>
      <StyledButton type="submit">Submit Review</StyledButton>
    </StyledForm>
  );
}
