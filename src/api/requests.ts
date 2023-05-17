import { Accessory } from '@/types/Accessory';
import { Category } from '@/types/Category';
import { CommonTechSpecs } from '@/types/CommonTechSpecs';
import { type Phone } from '@/types/Phone';
import { type Product } from '@/types/Product';
import { ProductsCount } from '@/types/ProductsCount';
import { SortBy } from '@/types/SortBy';
import { Tablet } from '@/types/Tablet';
import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_API_URL}/products`;

const get = async <T>(path: string): Promise<T> => {
  const { data } = await axios.get<T>(path);

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
    `${BASE_URL}/discount${limit ? `?limit=${limit}` : ''}`,
  );
};

export const getNewProducts = (limit?: number) => {
  return get<Product[]>(`${BASE_URL}/new${limit ? `?limit=${limit}` : ''}`);
};

export const getProductsByCategory = (
  category: Category,
  page?: number,
  limit?: number,
  sort?: SortBy,
  query?: string,
) => {
  const queries = [`category=${category}`];

  if (page) queries.push(`page=${page}`);
  if (limit) queries.push(`limit=${limit}`);
  if (sort) queries.push(`sort=${sort}`);
  if (query) queries.push(`query=${query}`);

  return get<Product[]>(`${BASE_URL}?${queries.join('&')}`);
};

export const getProductDetails = (id: string) => {
  return get<Phone | (Accessory & CommonTechSpecs) | Tablet>(`${BASE_URL}/${id}/details`);
};

export const getProduct = (id: string) => {
  return get<Product>(`${BASE_URL}/${id}`);
};

export const getProductsCount = (
  category: Category,
  query?: string,
) => {
  const queries = [`category=${category}`];

  if (query) queries.push(`query=${query}`);

  return get<ProductsCount>(`${BASE_URL}/count?${queries.join('&')}`);
};

export const getRecommendedProducts = (id: string) => {
  return get<Product[]>(`${BASE_URL}/${id}/recommended`);
};

export const getProductsByName = (
  query?: string,
  category?: Category,
) => {
  const queries = [];

  if (query) queries.push(`query=${query}`);
  if (category) queries.push(`category=${category}`);

  return get<Product[]>(
    `${BASE_URL}/search${queries.length ? `?${queries.join('&')}` : ''}`,
  );
};
