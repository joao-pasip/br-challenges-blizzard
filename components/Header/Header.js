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
  const [activeModal, setActiveModal] = React.useState(false);
  const [nameModal, setNameModal] = React.useState('');
  const [nameContentModal, setNameContentModal] = React.useState('');
  const [textClassName, setTextClassName] = React.useState('');
  const [aux, setAux] = React.useState(
    {
      jogos: 0,
      esportes: 0
    }
  );

  // console.log(aux);
  // console.log(activeModal);
  const handleClick = (e) => {
    // console.log(e.target);
    let liClassName = e.currentTarget.className.trim();
    let arrayClassName = liClassName.split(" ");
    let onlyFirstLiClassName = arrayClassName[0];
    setNameContentModal(onlyFirstLiClassName);

    if(activeModal) {
      // console.log(onlyFirstLiClassName, activeModal);
      // console.log(aux);
      switch (onlyFirstLiClassName) {
        case 'jogos':
          aux.jogos++;
          if (aux.esportes > 0) {
            aux.esportes--;
          }
          setNameModal(liClassName);
          if(aux.jogos > 1) {
            setActiveModal(!activeModal);
            aux.jogos = 0;
            // console.log(aux);
          }
          break;

        case 'esportes':
          aux.esportes++;
          if (aux.jogos > 0) {
            aux.jogos--;
          }
          setNameModal(liClassName);
          if (aux.esportes > 1) {
            setActiveModal(!activeModal);
            aux.esportes = 0;
            // console.log(aux);
          }
          break;
      
        default:
          break;
      }
    } else {
      switch (onlyFirstLiClassName) {
        case 'jogos':
          aux.jogos++;
          setActiveModal(!activeModal);
          setNameModal(liClassName)
          break;

        case 'esportes':
          aux.esportes++;
          setActiveModal(!activeModal);
          setNameModal(liClassName)
          break;

        default:
          break;
      }
    }
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
                className={`jogos ${nameModal === 'jogos' ? styles.arrowActive : ''}`}
              >Jogos<Image 
                priority
                height='auto'
                width='auto'
                src={arrow}
                alt="Arrow Game"
              /></li>
              <li
                onClick={handleClick}
                className={`esportes ${nameModal === 'esportes' ? styles.arrowActive : ''}`}
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

      <Menu activeModal={activeModal} nameContentModal={nameContentModal}/>
    </header>
  )
}