import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <div className={styles.page}>
      <header className={styles.page_header}>
        header
      </header>

      <main className={styles.page_content}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>

      <footer>
        <div className={styles.container}>
          footer
        </div>
      </footer>
    </div>
  );
};