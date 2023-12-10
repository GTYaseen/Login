// server.js

const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors"); // Add this line

const app = express();
const port = 3001;

// Sample user data (replace with your user authentication logic)
const users = [
  {
    id: 1,
    username: "yaseen",
    password: "01020304",
  },
  {
    id: 2,
    username: "tabark",
    password: "01020304",
  },
  {
    id: 3,
    username: "murtadtha",
    password: "01020304",
  },
  {
    id: 4,
    username: "nabaa",
    password: "01020304",
  },
  {
    id: 5,
    username: "baker",
    password: "01020304",
  },
  {
    id: 6,
    username: "ali",
    password: "01020304",
  },
];

// Secret key for JWT signing (replace with a secure secret key)
const secretKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoieWFzZWVuIiwiaWF0IjoxNzAyMTY2MzE4LCJleHAiOjE3MDIxNjk5MTh9.W_mEuXDuGPKlR58N8ukMv7TsRPrZwT3Q7C_DZP704Yg";

app.use(bodyParser.json());
app.use(cors()); // Enable CORS

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      secretKey,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});
// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     req.userId = decoded.userId;
//   });
// };
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});
