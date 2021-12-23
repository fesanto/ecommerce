import GlobalStyle from '../styles/globals';
import { ComponentsProvider } from '../components/ComponentsProvider'
import { Layout } from '../components/Layout'


export default function App({ Component, pageProps }) {
  return (
    <>
      <ComponentsProvider>
        <Layout>
          <Component {...pageProps} />
          <GlobalStyle />
        </Layout>
      </ComponentsProvider>
    </>
  )
}
