import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import '@styles/blocks/container.scss';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';


export const MainLayout = () => {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.page_content}>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};
