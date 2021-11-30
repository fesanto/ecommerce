//import { AppProps } from 'next/app';

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

// const App: React.FC<AppProps> = ({ Component, pageProps }) => {
//   return (
//     <>
//       <ComponentsProvider>
//         <>
//           <Component {...pageProps} />
//           <GlobalStyle />
//         </>
//       </ComponentsProvider>
//     </>
//   );
// };

// export default App;
