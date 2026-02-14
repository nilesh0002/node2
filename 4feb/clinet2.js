import { createConnection } from "net";
let client = createConnection({ port: 8080 }, () => {
  console.log("Connected to server");
  client.write("Hello from client");
});

client.on("data", (data) => {
  console.log(data.toString());
  client.end();
});