import { Category } from '@/types/Category';
import { type Phone } from '@/types/Phone';
import { Product } from '@/types/Product';
import { SortBy } from '@/types/SortBy';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

const get = async <T>(path: string): Promise<T> => {
  const { data } = await axios.get<T>(path);

  return data;
};

export const getAllProducts = (limit?: number): Promise<Product[]> => {
  return get(`${BASE_URL}/products${limit ? `?limit=${limit}` : ''}`);
};

export const getProductsWithDiscount = (limit?: number) => {
  return get(`${BASE_URL}/products/discount${limit ? `?limit=${limit}` : ''}`);
};

export const getNewProducts = (limit?: number) => {
  return get(`${BASE_URL}/products/new${limit ? `?limit=${limit}` : ''}`);
};

export const getPhones = (page?: number, limit?: number, sort?: SortBy) => {
  const queries = [];

  if (page) queries.push(`page=${page}`);
  if (limit) queries.push(`limit=${limit}`);
  if (sort) queries.push(`sort=${sort}`);

  return get<Phone[]>(
    `${BASE_URL}/phones${queries.length ? `?${queries.join('&')}` : ''}`,
  );
};

export const getProductDetails = (category: Category, id: string) => {
  return get<Phone>(`${BASE_URL}/${category}/${id}`);
};
