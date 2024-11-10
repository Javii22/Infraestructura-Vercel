export default function handler(req, res) {
    if (req.method === 'POST') {
      // Aquí podrías manejar el envío del formulario (por ejemplo, enviar un correo)
      res.status(200).json({ message: 'Mensaje recibido' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }