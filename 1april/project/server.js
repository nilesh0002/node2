import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;

const serve = (res, file, status = 200) => {
  const filePath = path.join(__dirname, file);

  fs.readFile(filePath, "utf8", (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
      return;
    }

    res.writeHead(status, { "Content-Type": "text/html; charset=utf-8" });
    res.end(content);
  });
};

const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === "/" || url === "/about" || url === "/about.html") {
    serve(res, "about.html");
    return;
  }

  if (url === "/contact" || url === "/contact.html") {
    serve(res, "contact.html");
    return;
  }

  if (url === "/login" || url === "/login.html") {
    serve(res, "login.html");
    return;
  }

  if (url === "/signup" || url === "/signup.html") {
    serve(res, "signup.html");
    return;
  }

  serve(res, "about.html", 404);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
