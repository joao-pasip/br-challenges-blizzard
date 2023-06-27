import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google';
import Head from 'next/head'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

const inter = Inter({
  weight: ['500'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }

        html {
          font-size: 62.5%;
          font-family: ${poppins.style.fontFamily};
        }

        .container {
          width: 100%;
          max-width: 1403px;
          margin: 0 auto;
          padding: 0 45px;
        }

        button {
          padding: 1rem 1.6rem;
          border-radius: 4px;
          font-size: 1.4rem;
          line-height: 2.1rem;
          border: none;
          cursor: pointer;
          color: white;
        }

        @media (max-width: 800px) { 
          .container {
            padding: 0 20px;
          }
        }

        .menuModalText {
          font-family: ${inter.style.fontFamily};
          color: #9d9d9d;
          text-align: center;
          font-size: 1.4rem;
        }

         .menuModalTextFooter {
          font-family: ${poppins.style.fontFamily};
          font-weight: 600;
          color: #fff;
          text-align: center;
          font-size: 1.6rem;
        }
      `}</style>
      <Head>
        <title>Blizzard®</title>
        <link rel="icon" href="/iconAplicativoBattle.net.svg" sizes="any" />
      </Head>
      <Component {...pageProps}/>
    </>
  )
}