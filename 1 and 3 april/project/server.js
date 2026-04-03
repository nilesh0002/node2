// import http from "http";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const PORT = 3000;

// const serve = (res, file, status = 200) => {
//   const filePath = path.join(__dirname, file);

//   fs.readFile(filePath, "utf8", (err, content) => {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("Internal Server Error");
//       return;
//     }

//     res.writeHead(status, { "Content-Type": "text/html; charset=utf-8" });
//     res.end(content);
//   });
// };

// const server = http.createServer((req, res) => {
//   const { url } = req;

//   if (url === "/" || url === "/about" || url === "/about.html") {
//     serve(res, "about.html");
//     return;
//   }

//   if (url === "/contact" || url === "/contact.html") {
//     serve(res, "contact.html");
//     return;
//   }

//   if (url === "/login" || url === "/login.html") {
//     serve(res, "login.html");
//     return;
//   }

//   if (url === "/signup" || url === "/signup.html") {
//     serve(res, "signup.html");
//     return;
//   }

//   serve(res, "about.html", 404);
// });

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient } from "mongodb";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;

// ====================== MongoDB Setup ======================
const uri = "mongodb://127.0.0.1:27017";           // local MongoDB
const client = new MongoClient(uri);
const DB_NAME = "vertexportal";                    // you can change this name
const COLLECTION_NAME = "users";

// Helper: parse form data (application/x-www-form-urlencoded)
const parseForm = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => { body += chunk; });
    req.on("end", () => {
      const params = new URLSearchParams(body);
      resolve(Object.fromEntries(params));
    });
    req.on("error", reject);
  });
};

// ====================== Serve HTML ======================
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

// ====================== Server ======================
const server = http.createServer(async (req, res) => {
  const { url, method } = req;

  // ====================== SIGNUP - POST ======================
  if (url === "/signup" && method === "POST") {
    try {
      const formData = await parseForm(req);

      // Connect to MongoDB
      await client.connect();
      const db = client.db(DB_NAME);
      const collection = db.collection(COLLECTION_NAME);

      // Save user
      await collection.insertOne({
        name: formData.name,
        email: formData.email,
        password: formData.password,     // ← In production, hash this!
        createdAt: new Date()
      });

      console.log("✅ User saved:", formData.email);

      // Success response (you can change this)
      res.writeHead(302, { Location: "/login" }); // redirect to login page
      res.end();
      return;

    } catch (err) {
      console.error("MongoDB error:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server error - could not save user");
      return;
    }
  }

  // ====================== GET Routes (your original logic) ======================
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

  // 404 fallback
  serve(res, "about.html", 404);
});

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📦 Connected to local MongoDB at ${uri}`);
});