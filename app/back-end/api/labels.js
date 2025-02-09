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
