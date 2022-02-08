import '../styles/globals.css';
import styles from './_app.module.scss';

interface AppProps {
  Component: React.ReactElement | any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
