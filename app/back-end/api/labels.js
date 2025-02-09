const express = require("express");
const router = express.Router();
const pool = require("../db"); // Importera vår databaskonfiguration

// Uppdatera en användare i databasen
router.put("/test/:id", async (req, res) => {
  const { id } = req.params;
  const { description} = req.body;

  try {
    const result = await pool.query(
      "UPDATE test SET description = $1 WHERE id = $2 RETURNING *",
      [description, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Serverfel" });
  }
});

// Addera test i databasen
router.post("/test/", async (req, res) => {
  const { description} = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO test (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Serverfel" });
  }
});


module.exports = router;


// import { Pool } from 'pg';

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, data } = req.body;
//     const result = await pool.query(
//       'INSERT INTO labels (name, data) VALUES ($1, $2) RETURNING *',
//       [name, data]
//     );
//     res.json(result.rows[0]);
//   } else if (req.method === 'GET') {
//     const result = await pool.query('SELECT * FROM labels ORDER BY created_at DESC');
//     res.json(result.rows);
//   } else {
//     res.status(405).end();
//   }
// }
