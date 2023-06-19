export default function App({ Component, pageProps }) {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}