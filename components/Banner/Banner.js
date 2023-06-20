import styles from './Banner.module.css';
import banner1 from '../../assets/images/bg-banner1.jpg';
import banner2 from '../../assets/images/bg-banner2.jpg';
import banner3 from '../../assets/images/bg-banner3.jpg';

export default function Banner() {

  const banners = [
    {
      id: 1,
      img: banner1
    }, 
    {
      id: 2,
      img: banner2
    },
    { 
      id: 3,
      img: banner3
    }
  ];

  // const styleBanner = {
  //   background: `url(${banners[0].src}) no-repeat center center`,
  //   backgroundSize: 'cover',
  //   width: '100vw',
  //   height: '100vh'
  // }

  return (
    <>
      {banners.map((banner) => {
        return (<section style= {
          {
            background: `url(${banner.img.src}) no-repeat center center`,
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh'
          }}
          key={banner.id}
          >

          </section>)
      })}
    
    </>
  )
}