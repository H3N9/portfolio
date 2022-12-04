import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Navbar from '@components/header/Navbar';
import { ThemeProvider } from '@mui/material';
import theme from '@styles/theme';

gsap.registerPlugin(ScrollTrigger);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
