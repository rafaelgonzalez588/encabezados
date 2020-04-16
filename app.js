const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");

app.use(
  cookieSession({
    keys: ["testCookie"],
    maxAge: 60 * 1000
  })
);

app.use(cookieParser());

app.get("/", function(req, res) {
  let value;

  if (req.cookies.testCookie) {
    value = req.cookies.testCookie;
  }

  res.write(`Hello World!... ${value ? `Cookie Value: ${value}` : ""}`);
  res.end(); 
});

app.listen(3000, function() {
  console.log("server running on 3000");
});