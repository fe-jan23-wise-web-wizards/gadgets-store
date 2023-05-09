import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <header>
        header
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        footer
      </footer>
    </div>
  );
};