import express from "express";
import ViteExpress from "vite-express";
import mysql from "mysql";

const app = express();

const connection = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.get("/api/data", (req, res) => {
  const query = "SELECT * FROM catalog_items";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Failed to fetch data from MySQL" });
      return;
    }
    res.json(results); // Send fetched data as JSON response
  });
});

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
