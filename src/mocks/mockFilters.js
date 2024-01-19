/* eslint-disable camelcase */
import mockProducts from './mockProducts';

const mockCategoryName = mockProducts.map(({ category_name }) => category_name);
export const noRepeatedCategoryName = mockCategoryName
  .filter((filter, index) => mockCategoryName.indexOf(filter) === index);

const mockBrandName = mockProducts.map(({ brand_name }) => brand_name);
export const noRepeatedBrandName = mockBrandName
  .filter((filter, index) => mockBrandName.indexOf(filter) === index);

const mockGenderName = mockProducts.map(({ group_name }) => group_name);
export const noRepeatedGenderName = mockGenderName
  .filter((filter, index) => mockGenderName.indexOf(filter) === index);

const mockType = mockProducts.map(({ type }) => type);
export const noRepeatedType = mockType
  .filter((filter, index) => mockType.indexOf(filter) === index);

const mockSubCategoryName = mockProducts.map(({ sub_category }) => sub_category);
export const noRepeatedSubCategoryName = mockSubCategoryName
  .filter((filter, index) => mockSubCategoryName.indexOf(filter) === index);

export const mockFilters = [
  {
    filterName: 'Marca',
    options: noRepeatedBrandName,
    type: 'checkbox',
  },
  {
    filterName: 'Entrega',
    options: ['Pronta Entrega', 'Programado'],
    type: 'checkbox',
  },
  {
    filterName: 'Tipo',
    options: noRepeatedType,
    type: 'checkbox',
  },
  {
    filterName: 'Gênero',
    options: noRepeatedGenderName,
    type: 'checkbox',
  },
];
