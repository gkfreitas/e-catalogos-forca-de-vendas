import {
  noRepeatedBrandName,
  noRepeatedCategoryName,
  noRepeatedGenderName,
  noRepeatedSubCategoryName,
  noRepeatedType,
} from '../../../mocks/mockFilters';

export const brandOptions = [
  { value: 'brand', label: 'MARCA' },
  ...noRepeatedBrandName.map((brand) => ({
    value: brand,
    label: brand,
  })),
];

export const brandSelectedOptions = [
  { value: 'brand', label: 'MARCA COMPLETA' },
  ...noRepeatedBrandName.map((brand) => ({
    value: brand,
    label: brand,
  })),
];

export const typeOptions = [
  { value: 'tipo', label: 'TIPO' },
  ...noRepeatedType.map((type) => ({
    value: type,
    label: type,
  })),
];

export const deliveryOptions = [
  { value: 'entrega', label: 'ENTREGA' },
  { value: 'Pronta Entrega', label: 'Pronta Entrega' },
  { value: 'Programado', label: 'Programado' },
];

export const genderOptions = [
  { value: 'genero', label: 'GÊNERO' },
  ...noRepeatedGenderName.map((gender) => ({
    value: gender,
    label: gender,
  })),
];

export const categoryOptions = [
  { value: 'categoria', label: 'CATEGORIA' },
  ...noRepeatedCategoryName.map((category) => ({
    value: category,
    label: category,
  })),
];

export const subcategoryOptions = [
  { value: 'subcategoria', label: 'SUBCATEGORIA' },
  ...noRepeatedSubCategoryName.map((subcategory) => ({
    value: subcategory,
    label: subcategory,
  })),
];
