import styles from './Banner.module.css';

import banner1 from '../../assets/images/bg-banner1.jpg';
import banner2 from '../../assets/images/bg-banner2.jpg';
import banner3 from '../../assets/images/bg-banner3.jpg';

import iconBanner1 from '../../assets/images/iconsBanner/diablo-iv4-icon.png';
import iconBanner2 from '../../assets/images/iconsBanner/hearthstone-iv2-icon.png';
import iconBanner3 from '../../assets/images/iconsBanner/world-of-warcraft-iv1-icon.png';
import iconBanner4 from '../../assets/images/iconsBanner/diablo-immortal-iv11-icon.png';
import iconBanner5 from '../../assets/images/iconsBanner/starcraft-icon.png';

import React from 'react';
import Image from 'next/image';

import logoBanner1 from '../../assets/images/logosModalMenu/thumbsModalMenu/logoBanner1.png';
import logoBanner2 from '../../assets/images/logosModalMenu/thumbsModalMenu/logoBanner2.png';
import logoBanner3 from '../../assets/images/logosModalMenu/thumbsModalMenu/logoBanner3.png';

import imgGif1 from '../../assets/images/logosModalMenu/thumbsModalMenu/imgGif1.jpg';
import imgGif2 from '../../assets/images/logosModalMenu/thumbsModalMenu/imgGif2.jpg';
import imgGif3 from '../../assets/images/logosModalMenu/thumbsModalMenu/imgGif3.jpg';

import gif1 from '../../assets/images/logosModalMenu/thumbsModalMenu/gif1.gif';
import gif2 from '../../assets/images/logosModalMenu/thumbsModalMenu/gif2.gif';
import gif3 from '../../assets/images/logosModalMenu/thumbsModalMenu/gif3.gif';

import play from '../../assets/images/logosModalMenu/thumbsModalMenu/play.png';

import UserLogin from '../../components/Icons/UserLogin';

import ButtonComponent from '../../components/Button/Button';


export default function Banner() {

  const [indexBanner, setIndexBanner] = React.useState(0);

  const iconsBanner = [iconBanner1, iconBanner2, iconBanner3, iconBanner4, iconBanner5];

  const banners = [
    {
      id: 1,
      img: banner1,
      title: 'Retorna à escuridão com o game Diablo IV',
      p: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
      textButton: 'Jogue agora',
      thumb: {
        logoBanner: logoBanner1,
        imgTrailer: imgGif1,
        trailer: gif1,
        name: 'Diablo IV'
      }
    }, 
    {
      id: 2,
      img: banner2,
      title: 'Novo pacote de expansão de Hearthstone',
      p: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
      textButton: 'Reserve agora na pré-venda',
      thumb: {
        logoBanner: logoBanner2,
        imgTrailer: imgGif2,
        trailer: gif2,
        name: 'Hearthstone'
      }
    },
    { 
      id: 3,
      img: banner3,
      title: 'Desbrave as Terras Sombrias em Shadowlands!',
      p: 'O que jaz além do mundo que você conhece?',
      textButton: 'Reserve agora na pré-venda',
      thumb: {
        logoBanner: logoBanner3,
        imgTrailer: imgGif3,
        trailer: gif3,
        name: 'WarCraft'
      }
    }
  ];

  const handleClickIcon = (id) => {
    // console.log(id);
    // console.log(banners.length);
    if (banners.length > id) {
      setIndexBanner(id)
    }
  }

  return (
    <>
      {banners.map((banner, index) => {
        if(index !== indexBanner) return null;
        return (
          <section style= {
            {
              background: `url(${banner.img.src}) no-repeat center center`,
              backgroundSize: 'cover',
              width: '100%',
              height: '100vh'
            }}
            key={banner.id}
          >
            <div className={`${styles.banner} container`}>
              <ul>
                {iconsBanner.map((iconBanner, indexIconBanner) => {
                  return (
                    <li key={indexIconBanner} className={styles.iconsLi}>
                      <button 
                        className={`${styles.buttonIcon} ${indexBanner === indexIconBanner && styles.buttonIconActive}`} 
                        onClick={() => handleClickIcon(indexIconBanner)}
                      >
                        <img src={iconBanner.src} alt={`Ícone menu banner ${banner.thumb.name}`}/>
                      </button>
                    </li>
                  )
                })}

              </ul>

              <div className={styles.bannerCenter}>
                <h1>{banner.title}</h1>
                <p>{banner.p}</p>
                <ButtonComponent nameButton={banner.textButton} hasFill={true} icon={<UserLogin />} banner={true}/>
              </div>

              <div className={styles.bannerRight}>
                <img src={banner.thumb.logoBanner.src}/>
                <p>ASSISTA O TRAILER</p>
                <div>
                  <Image src={banner.thumb.imgTrailer} alt={banner.thumb.name} className={styles.imgTrailer} width={280} height={168} />
                  <Image src={banner.thumb.trailer} alt={`GIF ${banner.thumb.name}`} width={280} height={168}/>
                  <div className={styles.play}>
                    <img src={play.src} alt='play'/>
                  </div>
                </div>
              </div>
            </div>
          </section>)
      })}
    
    </>
  )
}