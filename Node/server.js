import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend
app.use(express.static(path.join(__dirname, "Frontend")));

const pool = mysql.createPool({
  host: "mysql",   // IMPORTANT for Docker
  user: "root",
  password: "root",
  database: "test_db",
  port: 3306,
});

// Routes
app.get('/db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT DATABASE() as db');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/register', async (req, res) => {
  const { email, password, isAllowed, skills } = req.body;
  try {
     const allowedValue = isAllowed === "Yes" ? 1 : 0;
    const [result] = await pool.query(
      'INSERT INTO users (email, password, isAllowed, skills) VALUES (?, ?, ?, ?)',
      [email, password, allowedValue, skills.join(',')]
    );
    res.json({ success: true, id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fallback route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "index.html"));
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
})