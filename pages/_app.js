import '../styles/App.scss';
import MainLayout from '../components/layout/Mainlayout';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
