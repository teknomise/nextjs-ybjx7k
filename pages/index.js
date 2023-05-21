import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header title="Homepage Teknopromo" />

      <main className={styles.main}></main>

      <Footer />
    </div>
  );
}
