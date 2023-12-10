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
    image:
      "https://cdn.discordapp.com/attachments/1051177077438685186/1176241470043340862/Yaseen.jpg?ex=65809c3b&is=656e273b&hm=48e9ab9a53c058044eef2764891d176e35776742b2ff388276fb8aac1b36a26a&",
  },
  {
    id: 2,
    username: "tabark",
    password: "01020304",
    image:
      "https://cdn.discordapp.com/attachments/1051177077438685186/1183497888626638848/Screenshot_2023-12-10_224709.png?ex=65888d4c&is=6576184c&hm=6d740650261cf27a66bb169157a2e969afbe665e973a11819713d8da3dd4da07&",
  },
  {
    id: 3,
    username: "murtadtha",
    password: "01020304",
    image:
      "https://cdn.discordapp.com/attachments/1051177077438685186/1183497889071243284/Screenshot_2023-12-10_224806.png?ex=65888d4d&is=6576184d&hm=c4b7d20ece07154a67483e0a6aa853f65e60c3b71ec268d01fb2586350e02b28&",
  },
  {
    id: 4,
    username: "nabaa",
    password: "01020304",
    image:
      "https://cdn.discordapp.com/attachments/1051177077438685186/1183498393927028937/Screenshot_2023-12-10_225941.png?ex=65888dc5&is=657618c5&hm=7914360c37e71d0e9de5c777091f824ab7ac6319f49498e3893fca9ae7809dfd&",
  },
  {
    id: 5,
    username: "baker",
    password: "01020304",
    image:
      "https://cdn.discordapp.com/attachments/1051177077438685186/1183498144340770939/photo_2023-07-30_14-57-07.jpg?ex=65888d89&is=65761889&hm=c97c1f1600b782b616b02c81144590f726fb65b1abd8603fbb6978ca0648852b&",
  },
  {
    id: 6,
    username: "ali",
    password: "01020304",
    image:
      "https://cdn.discordapp.com/attachments/1051177077438685186/1183498144114290688/photo_2023-07-30_14-48-21.jpg?ex=65888d89&is=65761889&hm=d8d0b7dcb7e077df0e6c98ea1487cc6804a39b77efdc82bc3c0f761303d45915&",
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
      { userId: user.id, username: user.username, image: user.image },
      secretKey,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});
