import { type Accessory } from '@/types/Accessory';
import { Category } from '@/types/Category';
import { CommonTechSpecs } from '@/types/CommonTechSpecs';
import { OrderDetails } from '@/types/OrderDetails';
import { type Phone } from '@/types/Phone';
import { type Product } from '@/types/Product';
import { ProductsCount } from '@/types/ProductsCount';
import { SortBy } from '@/types/SortBy';
import { type Tablet } from '@/types/Tablet';
import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_API_URL}`;
const PRODUCTS_URL = `${BASE_URL}/products`;
const ORDERS_URL = `${BASE_URL}/orders`;

const get = async <T>(path: string, body?: any): Promise<T> => {
  const { data } = await axios.get<T>(path, { ...body});

  return data;
};

export const getAllProducts = (
  page?: number,
  limit?: number,
  sort?: SortBy,
) => {
  const queries = [];

  if (page) queries.push(`page=${page}`);
  if (limit) queries.push(`limit=${limit}`);
  if (sort) queries.push(`sort=${sort}`);

  return get<Product[]>(
    `${BASE_URL}${queries.length ? `?${queries.join('&')}` : ''}`,
  );
};

export const getProductsWithDiscount = (limit?: number) => {
  return get<Product[]>(
    `${PRODUCTS_URL}/discount${limit ? `?limit=${limit}` : ''}`,
  );
};

export const getNewProducts = (limit?: number) => {
  return get<Product[]>(`${PRODUCTS_URL}/new${limit ? `?limit=${limit}` : ''}`);
};

export const getProductsByCategory = (
  category: Category,
  page?: number,
  limit?: number,
  sort?: SortBy,
) => {
  const queries = [`category=${category}`];

  if (page) queries.push(`page=${page}`);
  if (limit) queries.push(`limit=${limit}`);
  if (sort) queries.push(`sort=${sort}`);

  return get<Product[]>(`${PRODUCTS_URL}?${queries.join('&')}`);
};

export const getProductDetails = (id: string) => {
  return get<Phone | (Accessory & CommonTechSpecs) | Tablet>(
    `${PRODUCTS_URL}/${id}/details`,
  );
};

export const getProduct = (id: string) => {
  return get<Product>(`${PRODUCTS_URL}/${id}`);
};

export const getProductsCount = (category: Category) => {
  return get<ProductsCount>(`${PRODUCTS_URL}/count?category=${category}`);
};

export const getRecommendedProducts = (id: string) => {
  return get<Product[]>(`${PRODUCTS_URL}/${id}/recommended`);
};

export const getOrdersByUserId = (id: string) => {
  return get<OrderDetails[]>(`${ORDERS_URL}/${id}`, {
    userId: id,
  });
};
