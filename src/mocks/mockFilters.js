/* eslint-disable camelcase */
import mockProducts from './mockProducts';

const mockCategoryName = mockProducts.map(({ category_name }) => category_name);
const noRepeatedCategoryName = mockCategoryName
  .filter((filter, index) => mockCategoryName.indexOf(filter) === index);

const mockBrandName = mockProducts.map(({ brand_name }) => brand_name);
const noRepeatedBrandName = mockBrandName
  .filter((filter, index) => mockBrandName.indexOf(filter) === index);

const mockGenderName = mockProducts.map(({ group_name }) => group_name);
const noRepeatedGenderName = mockGenderName
  .filter((filter, index) => mockGenderName.indexOf(filter) === index);

export const mockFilters = [
  {
    filterName: 'Marca',
    options: noRepeatedBrandName,
  },
  {
    filterName: 'Entrega',
    options: ['Pronta Entrega', 'Programado'],
  },
  {
    filterName: 'Tipo',
    options: ['Tipo 1', 'Tipo 2', 'Tipo 3', 'Tipo 4', 'Tipo 5', 'Tipo 6'],
  },
  {
    filterName: 'Gênero',
    options: noRepeatedGenderName,
  },
  {
    filterName: 'Categorias',
    subFilters: noRepeatedCategoryName.map((category) => ({
      filterName: category,
      options: ['Subcategoria 1', 'Subcategoria 2', 'Subcategoria 3', 'Subcategoria 4'],
    })),

  },
];
