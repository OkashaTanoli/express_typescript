import express from "express";

let app = express();

app.get("/", (request:any, response:any) => {
  response.send("Hello world!");
});

app.listen(3000, () => {
  console.log("Express app started on port 3000.");
});