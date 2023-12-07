// import axios from 'axios';

// // eslint-disable-next-line max-len
// const AUTH_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTYwLCJuYW1lIjoiTWljaGVsZSBTaWx2YSIsIm1haWwiOiIiLCJjb21wYW55X2lkIjoxLCJwZXJtaXNzaW9ucyI6eyJyZWFkIjpbImFwcCJdLCJ3cml0ZSI6WyJhcHAiXX0sImluY3JlbWVudGFsX2lkIjoiMTI4NCIsInR5cGUiOiJzZWxsZXIiLCJicmFuY2hfaWQiOjMsImRpcmVjdF9vcmRlciI6MCwiaWF0IjoxNzAwNjU1NzM0LCJhdWQiOiI2YTc1MzE0Yi1jOTUwLTRhMDQtYjA1MC0zNzg5YjkwODI0ZjAiLCJqdGkiOiJmOGRkOTJkMS1hMGQ3LTQzYjQtOTI0NC0zMTM5YmUwYzE0MjMifQ.Qs5mCplmOjMgxjXM7hOlAIwph5QnyYIqSn-0cpWcskbgpGpld35ud8Wa4R2uVr0vK7s--WQQmX1JXNrcETJiXitMoYU6yn5H19LqFGZOvG7piz4Wu-_m2aEmG3HEJvH2ux8l_jGp3H0kXAQwGhq6Agwy34paQI2T96a7A2uAoXky7MVtIpLeiBc_gl59WV1vloA7f6fQzjaRwK4ORdm9K72302vuaxP33W8C5ZLuatBzx1F4qf8NrR8CV3Qexu-EII7sICpRPmSwok7k3Wb0bzTPEkbNoUNRIJ2txIzhoInGoAOUoNuheTFbfSA-9pIE5PahOd1pzhsMjYk9TP9GKw';

// const api = axios.create(
//   {
//     baseURL: 'http://localhost:6187/v2',
//   },
// );
// api.defaults.headers.common.Authorization = AUTH_TOKEN;

// export const getProducts = async () => {
//   try {
//     const response = await api.get('/link/products/all?page=4');
//     const { data } = response;
//     console.log(data[4]);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // export const getCategories = () => {
// //   try {
// //     api.get('/categories').then((response) => {
// //       console.log(response.data);
// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// // export const getBrands = () => {
// //   try {
// //     api.get('/brands').then((response) => {
// //       console.log(response.data);
// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// // export const getClients = () => {
// //   try {
// //     api.get('/clients').then((response) => {
// //       console.log(response.data);
// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// // export const getGroups = () => {
// //   try {
// //     api.get('/groups').then((response) => {
// //       console.log(response.data);
// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// // export const getCarriers = () => {
// //   try {
// //     api.get('/carriers').then((response) => {
// //       console.log(response.data);
// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// // export const getPriceTable = () => {
// //   try {
// //     api.get('/price_tables').then((response) => {
// //       console.log(response.data);
// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };
