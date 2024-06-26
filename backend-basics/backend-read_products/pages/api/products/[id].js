// import { products } from "../../../lib/products";
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  // const product = products.find((product) => product.id === id);
  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");
    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }

  if (request.method === "PUT") {
    const updatedProduct = request.body;
    await Product.findByIdAndUpdate(id, updatedProduct),
      response
        .status(200)
        .json({ Status: "You updated the fish successfully" });
  }
  if (request.method === "DELETE") {
    await Product.findByIdAndDelete(id),
      response
        .status(200)
        .json({ Status: "You deleted the fish successfully" });
  }
}
