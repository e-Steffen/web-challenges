// import { products } from "../../../lib/products";
import dbConnect from "@/db/connect";
import Review from "@/db/models/Review";

export default async function handler(request, response) {
  // return response.status(200).json(products);
  await dbConnect();

  if (request.method === "POST") {
    try {
      // new try add Reviews:
      const reviewData = request.body;
      await Review.create(reviewData);
      console.log("you add a new review!");
      // end try
      response
        .status(201)
        .json({ status: "Awesome, you added a new review successfuly!" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
