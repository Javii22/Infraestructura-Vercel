import mysql from 'mysql2/promise';

// Crea una función para obtener la conexión
export async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost', // Cambia esto si usas un servicio en la nube
    user: 'tu_usuario', // Tu usuario de MySQL
    password: 'tu_contraseña', // Tu contraseña de MySQL
    database: 'mi_base_de_datos', // Nombre de tu base de datos
    port: 3306,
  });
  return connection;
}