const express = require("express");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

//once means check to see if the database connection is there; if open, tell express to start listening//
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`)
  })
})