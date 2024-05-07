import GlobalStyle from "../styles"; // the original name is "createGlobalStyle", but since the export is "default" we can rename it here

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
