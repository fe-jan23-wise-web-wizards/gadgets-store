import {
createBrowserRouter,
createRoutesFromElements,
Navigate,
Route,
} from 'react-router-dom';

import { MainLayout } from '@/layouts/MainLayout';
import { AccessoriesPage } from '@/pages/AccessoriesPage';
import { CartPage } from '@/pages/CartPage';
import { FavoritesPage } from '@/pages/FavoritesPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PhonesPage } from '@/pages/PhonesPage';
import { ProductPage } from '@/pages/ProductPage';
import { TabletsPage } from '@/pages/TabletsPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" replace />} />

      <Route path="phones">
        <Route index element={<PhonesPage />} />
        <Route path=":id" element={<ProductPage />} />
      </Route>

      <Route path="tablets">
        <Route index element={<TabletsPage />} />
        <Route path=":id" element={<ProductPage />} />
      </Route>

      <Route path="accessories">
        <Route index element={<AccessoriesPage />} />
        <Route path=":id" element={<ProductPage />} />
      </Route>

      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="cart" element={<CartPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
