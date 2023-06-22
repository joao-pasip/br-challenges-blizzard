import styles from './Header.module.css';
import ButtonComponent from "../Button/Button.js";
import Image from 'next/image';
import logoImage from '../../assets/images/blizzard-logo.svg'
import UserLogin from '../Icons/UserLogin';
import Link from 'next/link';
import arrow from '../../assets/images/arrow.svg';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={`${styles.header} container`}>
       <div className={styles.leftHeader}>
          <div className={styles.logo}>
            <Link
              href='/'
            >
              <Image
                priority
                height='auto'
                width='auto'
                src={logoImage}
                alt="Logo Blizzard"
              />
            </Link>
          </div>
          <nav>
            <ul className={styles.navMenu}>
              <li>Jogos <Image 
                priority
                height='auto'
                width='auto'
                src={arrow}
                alt="Arrow Game"
              /></li>
              <li>Esportes <Image
                priority
                height='auto'
                width='auto'
                src={arrow}
                alt="Arrow Game"
              /></li>
              <li>Loja</li>
              <li>Notícias</li>
              <li>Suporte</li>
            </ul>
          </nav>
       </div>

       <div className={styles.rightHeader}>
        <div className={styles.btnContainer}>
          <ButtonComponent nameButton={'Criar conta'}/>
          <ButtonComponent nameButton={'Logar'} hasFill={true} icon={<UserLogin />}/>
        </div>

        <button className={styles.hamburguerBtn}>
          <div></div>
          <div></div>
          <div></div>
        </button>
       </div>

      </div>
    </header>
  )
}