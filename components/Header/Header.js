import styles from './Header.module.css';
import ButtonComponent from "../Button/Button.js";
import Image from 'next/image';
import logoImage from '../../assets/images/blizzard-logo.svg'
import UserLogin from '../Icons/UserLogin';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={`${styles.header} container`}>
        <div className={styles.logo}>
          <Link
            href='/'
          >
            <Image
              priority
              height='auto'
              width='auto'
              src={logoImage}
              alt="Follow us on Twitter"
            />
          </Link>
        </div>
        <nav>
          <ul className={styles.navMenu}>
            <li>Jogos</li>
            <li>Esportes</li>
            <li>Loja</li>
            <li>Notícias</li>
            <li>Suporte</li>
          </ul>
        </nav>
        <div className={styles.btnContainer}>
          <ButtonComponent nameButton={'Criar conta'}/>
          <ButtonComponent nameButton={'Logar'} hasFill={true} icon={<UserLogin />}/>
        </div>
      </div>
    </header>
  )
}