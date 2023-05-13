import { type Phone } from '@/types/Phone';
import { type Product } from '@/types/Product';
import { SortBy } from '@/types/SortBy';
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

export const getPhones = (
  page?: number,
  limit?: number,
  sort?: SortBy,
) => {
  const queries = ['category=phones'];

  if (page) queries.push(`page=${page}`);
  if (limit) queries.push(`limit=${limit}`);
  if (sort) queries.push(`sort=${sort}`);

  return get<Product[]>(`${BASE_URL}?${queries.join('&')}`);
};

export const getProductDetails = (id: string) => {
  return get<Phone>(`${BASE_URL}/${id}`);
};
