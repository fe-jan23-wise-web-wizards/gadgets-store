import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';

import { FavoritesPage } from '@/pages/FavoritesPage';
import { OrdersPage } from '@pages/OrdersPage';
import { Category } from '@/types/Category';
import { SignedIn,SignedOut } from '@clerk/clerk-react';
import { MainLayout } from '@layouts/MainLayout';
import { CartPage } from '@pages/CartPage';
import { HomePage } from '@pages/HomePage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { ProductPage } from '@pages/ProductPage';
import { ProductsPage } from '@pages/ProductsPage';
import { SignInPage } from '@pages/SignInPage/SignInPage';

const categories = Object.values(Category);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" replace />} />

      <Route path="sign-in" element={<SignInPage />} />

      {categories.map(category => (
        <Route key={category} path={category}>
          <Route index element={<ProductsPage />} />
          <Route path=":id" element={<ProductPage />} />
        </Route>
      ))}

      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="orders" element={<OrdersPage />} />

      <Route
        path="orders"
        element={
          <>
            <SignedIn>
              <OrdersPage />
            </SignedIn>
            <SignedOut>
              <Navigate to="/sign-in" replace />
            </SignedOut>
          </>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
