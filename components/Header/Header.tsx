import Link from 'next/link'
import styles from '../../styles/Home.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h3>Logo E-commerce</h3>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/components">Components</Link></li>
      </ul>
    </header>
  )
}

export { Header }