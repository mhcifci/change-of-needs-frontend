import Image from 'next/image';
import styles from './navbar.module.scss';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <div className={styles.logoArea}>
          <Image
            width={230}
            height={40}
            src="https://seeklogo.com/images/N/national-rail-logo-1A0145F61B-seeklogo.com.png"
            alt="Landscape picture"
          />
        </div>
        <div className={styles.menuArea}>
          <ul className={styles.navMenuList}>
            <li>
              <Link href="#">Homepage</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Categories</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
