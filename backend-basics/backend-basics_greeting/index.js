import { server } from "./server.js";

// server.listen(…
const port = 3005;
server.listen(port, () => {
  console.log("Server runs at", port);
});
