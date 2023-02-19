import Image from 'next/image';
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <Image
        src=""
        alt="Website Logo" />
      </div>
    </>
  )
}
