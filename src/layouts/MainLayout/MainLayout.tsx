import { Header } from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Footer/Footer';
import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.page_content}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};
