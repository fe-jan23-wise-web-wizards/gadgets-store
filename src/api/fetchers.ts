import axios from "axios";

export const get = async <T>(path: string, body?: any): Promise<T> => {
  const { data } = await axios.get<T>(path, { ...body });

  return data;
};

export const post = async <T>(path: string, body?: any): Promise<T> => {
  const { data } = await axios.post<T>(path, { ...body });

  return data;
};
