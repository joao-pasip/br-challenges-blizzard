import styles from './Header.module.css';
import ButtonComponent from "../Button/Button.js";
import Image from 'next/image';
import logoImage from '../../assets/images/blizzard-logo.svg'
import UserLogin from '../Icons/UserLogin';
import Link from 'next/link';
import arrow from '../../assets/images/arrow.svg';
import Menu from '../Modal/MenuModal/Menu';
import React from 'react';

export default function Header() {
  const [active, setActive] = React.useState(false);
  const [nameModal, setNameModal] = React.useState('');

  const modal = {
    jogos: [
      {
        id: 1,
        name: "Diablo",
      },
      {
        id: 2,
        name: "CSGO",
      },
    ],
    esportes: [
      {
        id: 1,
        name: "Futebol",
      },
    ],
  };

  const handleClick = ({target}) => {
    const textEvent = target.innerText.toLowerCase();
    setNameModal(textEvent)
    console.log(nameModal);
    setActive(!active);
  }

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
              <li
                onClick={handleClick}
                className={nameModal === 'jogos' ? styles.arrowActive : ''}
              >Jogos<Image 
                priority
                height='auto'
                width='auto'
                src={arrow}
                alt="Arrow Game"
              /></li>
              <li
                onClick={handleClick}
                className={nameModal === 'esportes' ? styles.arrowActive : ''}
              >Esportes<Image
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

      <Menu active={active}/>
    </header>
  )
}