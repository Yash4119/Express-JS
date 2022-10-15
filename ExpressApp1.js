const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// const yashMiddleware = (req,res,next)=>{
//     console.log(req.url);
//     next();
// }

app.use(express.static(path.join(__dirname, "public")));
// app.use(yashMiddleware)

app.get("/hello/:name", (req, res) => {
  res.send(
    `Started at home page <a class="nav-link" href="/about">Link</a> <a class="nav-link" href="/json">Link2</a>`+
    req.params.name
  );
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  // res.status(500);
});
app.get("/json", (req, res) => {
  res.json({ Name: "Yash Jayram Ambekar" });
});
app.listen(port, () => {
  console.log(
    `The Example Express JS app is Running on http://localhost:${port}/`
  );
});
