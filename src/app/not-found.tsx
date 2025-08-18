import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <span className={styles.title}>Страница не найдена</span>
      <Link href="/">Перейти на главную</Link>
    </div>
  )
}