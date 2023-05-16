import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';

import { MainLayout } from '@layouts/MainLayout';
import { ProductsPage } from '@pages/ProductsPage';
import { CartPage } from '@pages/CartPage';
import { FavoritesPage } from '@/pages/FavoritesPage';
import { HomePage } from '@pages/HomePage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { ProductPage } from '@pages/ProductPage';
import { Category } from '@/types/Category';

const categories = Object.values(Category);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" replace />} />

      {categories.map(category => (
        <Route key={category} path={category}>
          <Route index element={<ProductsPage />} />
          <Route path=":id" element={<ProductPage />} />
        </Route>
      ))}

      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="cart" element={<CartPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
