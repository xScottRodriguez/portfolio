import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { LanguageProvider } from '../context/LanguageProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </ChakraProvider>
  );
}

export default MyApp;
