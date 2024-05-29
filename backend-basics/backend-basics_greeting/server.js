import { createServer } from "node:http";

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end("Hello, my name is Steffen");
});
