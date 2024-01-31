import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/app',
});

export const authLogin = (key, login, pass) => {
  const { token } = api.post('/auth', { key, login, pass });
  api.headers.Authorization = `Bearer ${token}`;
  console.log(token);
};

export const getProducts = async () => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjMyLCJuYW1lIjoiZ2FicmllbCIsImNvZGUiOiIwMDEiLCJtYWlsIjoiZ2FicmllbEBlbWFpbC5jb20iLCJjb21wYW55X2lkIjoyLCJpbmNyZW1lbnRhbF9pZCI6IjEiLCJ0eXBlIjoic2VsbGVyIiwiYnJhbmNoX2lkIjoyMDAsImlhdCI6MTcwNTU4MDc0NCwiYXVkIjoiYTY1YjZmYTctNjRjZC00ZDI1LWI0MTQtYjUyNTQ1YWMwZmNkIiwianRpIjoiYTQ3ZmI5ZTItNGI4Mi00MDkyLWIwNzktODMzNDY3MDAwZThlIn0.NcrbRVAoMMNH7M_U3qlETXFsMwOMe_d_3xROQSfQ6aI';

  api.defaults.headers.Authorization = `Bearer ${token}`;

  const baseBody = {
    brands: [],
    delivery_periods: [],
    groups: [],
    genders: [],
    categories: [],
    subcategories: [],
    price_table_id: 15,
  };

  const { data } = await api.post('/products?page=1&limit=10', baseBody);

  return data.products;
};
