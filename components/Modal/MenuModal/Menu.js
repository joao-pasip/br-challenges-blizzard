import React from 'react';
import styles from './Menu.module.css';
import DiabloII from '../../../assets/images/logosModalMenu/DiabloLogoII.png';
import OverwatchLogo2 from '../../../assets/images/logosModalMenu/OverwatchLogo2.png';
import WorldOfWarcraft from '../../../assets/images/logosModalMenu/WorldOfWarcraft.png';
import Hearthstone from '../../../assets/images/logosModalMenu/Hearthstone.png';
import HeroesOfTheStorm from '../../../assets/images/logosModalMenu/HeroesOfTheStorm.png';
import WarcraftIIIReforged from '../../../assets/images/logosModalMenu/WarcraftIIIReforged.png';
import DiabloIV from '../../../assets/images/logosModalMenu/DiabloIV.png';
import DiabloImmortal from '../../../assets/images/logosModalMenu/DiabloImmortal.png';
import DiabloIII from '../../../assets/images/logosModalMenu/DiabloIII.png';
import StarCraftII from '../../../assets/images/logosModalMenu/StarCraftII.png';
import StarCraftRemastered from '../../../assets/images/logosModalMenu/StarCraftRemastered.png';
import ArcadeDaBlizzard from '../../../assets/images/logosModalMenu/ArcadeDaBlizzard.png';
import HearthstoneMasters from '../../../assets/images/logosModalMenu/HearthstoneMasters.png';
import CampeonatoMundialDeArenaWoW from '../../../assets/images/logosModalMenu/CampeonatoMundialDeArenaWoW.png';
import StarCraftIIWCS from '../../../assets/images/logosModalMenu/StarCraftIIWCS.png';
import CopaMundialDeOverwatch from '../../../assets/images/logosModalMenu/CopaMundialDeOverwatch.png';
import LigaDeOverwatch from '../../../assets/images/logosModalMenu/LigaDeOverwatch.png';


const modal = {
  jogos: [
    {
      id: 1,
      name: "Diablo® II ressurected",
      img: DiabloII
    },
    {
      id: 2,
      name: "Overwatch® 2",
      img: OverwatchLogo2
    },
    {
      id: 3,
      name: "World of Warcraft®",
      img: WorldOfWarcraft
    },
    {
      id: 4,
      name: "Hearthstone®",
      img: Hearthstone
    },
    {
      id: 5,
      name: "Heroes of the storm®",
      img: HeroesOfTheStorm
    },
    {
      id: 6,
      name: "Warcraft® III Reforged",
      img: WarcraftIIIReforged
    },
    {
      id: 7,
      name: "Diablo® IV",
      img: DiabloIV
    },
    {
      id: 8,
      name: "Diablo® Immortal",
      img: DiabloImmortal
    },
    {
      id: 9,
      name: "Diablo® III",
      img: DiabloIII
    },
    {
      id: 10,
      name: "StarCraft® II",
      img: StarCraftII
    },
    {
      id: 11,
      name: "StarCraft® Remastered",
      img: StarCraftRemastered
    },
    {
      id: 12,
      name: "Arcade da Blizzard®",
      img: ArcadeDaBlizzard
    },
  ],
  esportes: [
    {
      id: 1,
      name: "Hearthstone® masters",
      img: HearthstoneMasters
    },
    {
      id: 2,
      name: "Campeonato Mundial de Arena WoW®",
      img: CampeonatoMundialDeArenaWoW
    },
    {
      id: 3,
      name: "StarCraft® II WCS",
      img: StarCraftIIWCS
    },
    {
      id: 4,
      name: "Copa Mundial de Overwatch®",
      img: CopaMundialDeOverwatch
    },
    {
      id: 5,
      name: "Liga de Overwatch®",
      img: LigaDeOverwatch
    },
  ],
};

export default function Menu({ activeModal, nameContentModal }) {

  React.useEffect(() => { 
    // console.log(modal[nameContentModal][0]?.img.src);
  }, [nameContentModal])



  return (
    <section className={`${styles.menuModalContainer} ${activeModal ? styles.menuModalContainerActive : ''}`}>
      <div>
        <div className={styles.menuModal}>
          {nameContentModal && activeModal ? (
            <ul>
              {modal[nameContentModal].map((contentModal) => {
                return (
                  <li key={contentModal.id}>
                    <img src={contentModal.img.src} alt={`Logo ${contentModal.name}`}/>
                    <p>{contentModal.name}</p>
                  </li>
                )
              })}
            </ul>
          ) : <p>Loading...</p>}
        </div>
      </div>
      <div className={styles.menuModalFooter}>

      </div>
    </section>
  );
}