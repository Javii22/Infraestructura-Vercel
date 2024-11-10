import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [message, setMessage] = useState('');

  const handleContactClick = () => {
    setMessage('¡Gracias por tu interés! Me pondré en contacto contigo pronto.');
  };

  return (
    <Layout>
      <Head>
        <title>Mi Sitio Web</title>
        <meta name="description" content="Bienvenido a mi sitio web personal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.hero}>
        <h1 className={styles.title}>Bienvenido a Mi Sitio</h1>
        <p className={styles.description}>Un lugar para compartir mis ideas y proyectos.</p>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <h2>Proyectos</h2>
          <p>Explora mis últimos trabajos y colaboraciones.</p>
        </div>
        <div className={styles.feature}>
          <h2>Blog</h2>
          <p>Lee mis pensamientos sobre tecnología y desarrollo.</p>
        </div>
        <div className={styles.feature}>
          <h2>Contacto</h2>
          <p>¿Interesado en trabajar juntos? ¡Hablemos!</p>
          {/* Formulario de contacto */}
          <button onClick={handleContactClick} className={styles.contactButton}>Enviar Mensaje</button>
          {message && <p>{message}</p>}
        </div>
      </section>
    </Layout>
  );
}