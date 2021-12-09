import GlobalStyle from '../styles/globals';
import { ComponentsProvider } from '../components'


export default function App({ Component, pageProps }) {
  return (
    <>
      <ComponentsProvider>
        <>
          <Component {...pageProps} />
          <GlobalStyle />
        </>
      </ComponentsProvider>
    </>
  )
}
