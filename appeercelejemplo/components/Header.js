import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/" className={styles.logo}>Mi Sitio</Link>
        <ul className={styles.navItems}>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/about">Acerca de</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}