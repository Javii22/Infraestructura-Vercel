import { getConnection } from '../../lib/db';

export default async function handler(req, res) {
  let connection;

  try {
    connection = await getConnection(); // Obtiene la conexión aquí

    if (req.method === 'GET') {
      const [rows] = await connection.query('SELECT * FROM users');
      res.status(200).json(rows);
    } else if (req.method === 'POST') {
      const { name, email } = req.body;
      const [result] = await connection.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
      res.status(201).json({ id: result.insertId, name, email });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  } finally {
    if (connection) {
      await connection.end(); // Asegúrate de cerrar la conexión
    }
  }
}