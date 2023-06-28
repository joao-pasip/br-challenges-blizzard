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

export default function Banner() {

  const [indexBanner, setIndexBanner] = React.useState(0);

  const iconsBanner = [iconBanner1, iconBanner2, iconBanner3, iconBanner4, iconBanner5];

  const banners = [
    {
      id: 1,
      img: banner1,
      title: 'Retorna à escuridão com o game Diablo IV',
      p: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
      textButton: 'Jogue agora'
    }, 
    {
      id: 2,
      img: banner2,
      title: 'Novo pacote de expansão de Hearthstone',
      p: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
      textButton: 'Reserve agora na pré-venda'
    },
    { 
      id: 3,
      img: banner3,
      title: 'Desbrave as Terras Sombrias em Shadowlands!',
      p: 'O que jaz além do mundo que você conhece?',
      textButton: 'Reserve agora na pré-venda'
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
                    <li key={indexIconBanner}>
                      <button 
                        className={`${styles.buttonIcon} ${indexBanner === indexIconBanner && styles.buttonIconActive}`} 
                        onClick={() => handleClickIcon(indexIconBanner)}
                      >
                        <img src={iconBanner.src} alt='ícone menu banner'/>
                      </button>
                    </li>
                  )
                })}

              </ul>
            </div>
          </section>)
      })}
    
    </>
  )
}