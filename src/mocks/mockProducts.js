/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-lines */

import banqueta1 from '../assets/fotos-app-novo/banqueta1.png';
import banqueta2 from '../assets/fotos-app-novo/banqueta2.png';
import bermuda1 from '../assets/fotos-app-novo/bermuda1.png';
import bermuda2 from '../assets/fotos-app-novo/bermuda2.png';
import bermuda3 from '../assets/fotos-app-novo/bermuda3.png';
import bermuda4 from '../assets/fotos-app-novo/bermuda4.png';
import bermuda5 from '../assets/fotos-app-novo/bermuda5.png';
import bermuda6 from '../assets/fotos-app-novo/bermuda6.png';
import bermuda7 from '../assets/fotos-app-novo/bermuda7.png';
import bermuda8 from '../assets/fotos-app-novo/bermuda8.png';
import bota1 from '../assets/fotos-app-novo/bota1.png';
import bota2 from '../assets/fotos-app-novo/bota2.png';
import bota3 from '../assets/fotos-app-novo/bota3.png';
import bota4 from '../assets/fotos-app-novo/bota4.png';
import bota5 from '../assets/fotos-app-novo/bota5.png';
import bota6 from '../assets/fotos-app-novo/bota6.png';
import bota7 from '../assets/fotos-app-novo/bota7.png';
import camisa1 from '../assets/fotos-app-novo/camisa1.png';
import chinelo1 from '../assets/fotos-app-novo/chinelo1.png';
import chinelo2 from '../assets/fotos-app-novo/chinelo2.png';
import chinelo3 from '../assets/fotos-app-novo/chinelo3.png';
import chinelo4 from '../assets/fotos-app-novo/chinelo4.png';
import chinelo5 from '../assets/fotos-app-novo/chinelo5.png';
import copo1 from '../assets/fotos-app-novo/copo1.png';
import copo2 from '../assets/fotos-app-novo/copo2.png';
import copo3 from '../assets/fotos-app-novo/copo3.png';
import copo4 from '../assets/fotos-app-novo/copo4.png';
import copo5 from '../assets/fotos-app-novo/copo5.png';
import escultura1 from '../assets/fotos-app-novo/escultura1.png';
import escultura2 from '../assets/fotos-app-novo/escultura2.png';
import escultura3 from '../assets/fotos-app-novo/escultura3.png';
import escultura4 from '../assets/fotos-app-novo/escultura4.png';
import escultura5 from '../assets/fotos-app-novo/escultura5.png';
import escultura7 from '../assets/fotos-app-novo/escultura7.png';
import escultura8 from '../assets/fotos-app-novo/escultura8.png';
import ferramenta3 from '../assets/fotos-app-novo/ferramenta3.png';
import ferramenta7 from '../assets/fotos-app-novo/ferramenta7.png';
import ferramenta8 from '../assets/fotos-app-novo/ferramenta8.png';
import ferramenta9 from '../assets/fotos-app-novo/ferramenta9.png';
import ferramentas1 from '../assets/fotos-app-novo/ferramentas1.png';
import ferramentas2 from '../assets/fotos-app-novo/ferramentas2.png';
import jaqueta01 from '../assets/fotos-app-novo/jaqueta01.png';
import jaqueta1 from '../assets/fotos-app-novo/jaqueta1.png';
import jaqueta2 from '../assets/fotos-app-novo/jaqueta2.png';
import jaqueta3 from '../assets/fotos-app-novo/jaqueta3.png';
import mesa3 from '../assets/fotos-app-novo/mesa 3.png';
import mesa1 from '../assets/fotos-app-novo/mesa1.png';
import mesa2 from '../assets/fotos-app-novo/mesa2.png';
import mochila1 from '../assets/fotos-app-novo/mochila1.png';
import mochila2 from '../assets/fotos-app-novo/mochila2.png';
import mochila3 from '../assets/fotos-app-novo/mochila3.png';
import touca1 from '../assets/fotos-app-novo/touca1.png';
import touca2 from '../assets/fotos-app-novo/touca2.png';
import touca3 from '../assets/fotos-app-novo/touca3.png';
import touca4 from '../assets/fotos-app-novo/touca4.png';
import img11 from '../assets/images/carrousel/img11.jpeg';
import img2 from '../assets/images/carrousel/img2.jpeg';
import img3 from '../assets/images/carrousel/img3.jpeg';
import img4 from '../assets/images/carrousel/img4.jpeg';
import img5 from '../assets/images/carrousel/img5.jpeg';
import img6 from '../assets/images/carrousel/img6.jpeg';

const banquetas = [banqueta1, banqueta2];
const bermudas = [bermuda1, bermuda2, bermuda3, bermuda4,
  bermuda5, bermuda6, bermuda7, bermuda8];
const botas = [bota1, bota2, bota3, bota4, bota5, bota6, bota7];
const camisas = [camisa1];
const chinelos = [chinelo1, chinelo2, chinelo3, chinelo4, chinelo5];
const copos = [copo1, copo2, copo3, copo4, copo5];
const esculturas = [escultura1, escultura2, escultura3, escultura4,
  escultura5, escultura7, escultura8];
const ferramentas = [ferramenta3,
  ferramenta7, ferramenta8,
  ferramenta9, ferramentas1, ferramentas2];
const jaquetas = [jaqueta1, jaqueta01, jaqueta2, jaqueta3];
const mesas = [mesa1, mesa2, mesa3];
const mochilas = [mochila1, mochila2, mochila3];
const toucas = [touca1, touca2, touca3, touca4];

const banquetasProducts = banquetas.map((banqueta, index) => {
  const randomReference = Math.floor(Math.random() * 10000) + 1000;
  const randomPrice = Math.floor(Math.random() * 200) + 50;
  const randomSize1 = Math.floor(Math.random() * 6) + 1;
  const randomSize2 = Math.floor(Math.random() * 6) + 1;
  const randomSize3 = Math.floor(Math.random() * 6) + 1;
  const randomSize4 = Math.floor(Math.random() * 6) + 1;
  const fixedQtd = randomSize1 + randomSize2 + randomSize3 + randomSize4;
  const product = {
    id: index + 100,
    name: 'Banqueta',
    reference: `67.15.${randomReference}`,
    brand_name: 'Diversos',
    category_name: 'Banquetas',
    price: randomPrice,
    fixed_qtd: fixedQtd,
    box_price: randomPrice * fixedQtd,
    sizes: {
      P: randomSize1,
      M: randomSize2,
      G: randomSize3,
      GG: randomSize4,
    },
    images: [
      {
        image: banqueta,
        product_id: index + 100,
      },
    ],
  };
  return product;
});

const bermudasProducts = bermudas.map((bermuda, index) => {
  const randomReference = Math.floor(Math.random() * 10000) + 1000;
  const randomPrice = Math.floor(Math.random() * 200) + 50;
  const randomSize1 = Math.floor(Math.random() * 6) + 1;
  const randomSize2 = Math.floor(Math.random() * 6) + 1;
  const randomSize3 = Math.floor(Math.random() * 6) + 1;
  const randomSize4 = Math.floor(Math.random() * 6) + 1;
  const fixedQtd = randomSize1 + randomSize2 + randomSize3 + randomSize4;
  const product = {
    id: index + 200,
    name: 'Bermuda',
    colors: [],
    reference: `67.15.${randomReference}`,
    brand_name: 'Marca Moda',
    category_name: 'Bermudas',
    price: randomPrice,
    fixed_qtd: fixedQtd,
    box_price: randomPrice * fixedQtd,
    sizes: {
      P: randomSize1,
      M: randomSize2,
      G: randomSize3,
      GG: randomSize4,
    },
    images: [
      {
        image: bermuda,
        product_id: index + 200,
      },
    ],
  };
  return product;
});

const botasProducts = botas.map((bota, index) => {
  const randomReference = Math.floor(Math.random() * 10000) + 1000;
  const randomPrice = Math.floor(Math.random() * 200) + 50;
  const randomSize1 = Math.floor(Math.random() * 6) + 1;
  const randomSize2 = Math.floor(Math.random() * 6) + 1;
  const randomSize3 = Math.floor(Math.random() * 6) + 1;
  const randomSize4 = Math.floor(Math.random() * 6) + 1;
  const fixedQtd = randomSize1 + randomSize2 + randomSize3 + randomSize4;
  const product = {
    id: index + 300,
    colors: [],
    name: 'Bota',
    reference: `67.15.${randomReference}`,
    brand_name: 'Marca Moda',
    category_name: 'Botas',
    price: randomPrice,
    fixed_qtd: fixedQtd,
    box_price: randomPrice * fixedQtd,
    sizes: {
      P: randomSize1,
      M: randomSize2,
      G: randomSize3,
      GG: randomSize4,
    },
    images: [
      {
        image: bota,
        product_id: index + 200,
      },
    ],
  };
  return product;
});

const camisasProducts = camisas.map((camisa, index) => {
  const randomReference = Math.floor(Math.random() * 10000) + 1000;
  const randomPrice = Math.floor(Math.random() * 200) + 50;
  const randomSize1 = Math.floor(Math.random() * 6) + 1;
  const randomSize2 = Math.floor(Math.random() * 6) + 1;
  const randomSize3 = Math.floor(Math.random() * 6) + 1;
  const randomSize4 = Math.floor(Math.random() * 6) + 1;
  const fixedQtd = randomSize1 + randomSize2 + randomSize3 + randomSize4;
  const product = {
    id: index + 400,
    name: 'Camisa',
    reference: `67.15.${randomReference}`,
    brand_name: 'Marca Moda',
    category_name: 'Camisas',
    price: randomPrice,
    fixed_qtd: fixedQtd,
    box_price: randomPrice * fixedQtd,
    sizes: {
      P: randomSize1,
      M: randomSize2,
      G: randomSize3,
      GG: randomSize4,
    },
    images: [
      {
        image: camisa,
        product_id: index + 200,
      },
    ],
  };
  return product;
});

const chinelosProducts = chinelos.map((chinelo, index) => {
  const randomReference = Math.floor(Math.random() * 10000) + 1000;
  const randomPrice = Math.floor(Math.random() * 200) + 50;
  const randomSize1 = Math.floor(Math.random() * 6) + 1;
  const randomSize2 = Math.floor(Math.random() * 6) + 1;
  const randomSize3 = Math.floor(Math.random() * 6) + 1;
  const randomSize4 = Math.floor(Math.random() * 6) + 1;
  const fixedQtd = randomSize1 + randomSize2 + randomSize3 + randomSize4;
  const product = {
    id: index + 500,
    colors: [],
    name: 'Chinelo',
    reference: `67.15.${randomReference}`,
    brand_name: 'Marca Moda',
    category_name: 'Chinelos',
    price: randomPrice,
    fixed_qtd: fixedQtd,
    box_price: randomPrice * fixedQtd,
    sizes: {
      P: randomSize1,
      M: randomSize2,
      G: randomSize3,
      GG: randomSize4,
    },
    images: [
      {
        image: chinelo,
        product_id: index + 200,
      },
    ],
  };
  return product;
});

const coposProducts = copos.map((copo, index) => {
  const randomReference = Math.floor(Math.random() * 10000) + 1000;
  const randomPrice = Math.floor(Math.random() * 200) + 50;
  const randomSize1 = Math.floor(Math.random() * 6) + 1;
  const randomSize2 = Math.floor(Math.random() * 6) + 1;
  const randomSize3 = Math.floor(Math.random() * 6) + 1;
  const randomSize4 = Math.floor(Math.random() * 6) + 1;
  const fixedQtd = randomSize1 + randomSize2 + randomSize3 + randomSize4;
  const product = {
    id: index + 600,
    name: 'Copo',
    reference: `67.15.${randomReference}`,
    brand_name: 'Marca Moda',
    category_name: 'Copos',
    price: randomPrice,
    fixed_qtd: fixedQtd,
    box_price: randomPrice * fixedQtd,
    sizes: {
      P: randomSize1,
      M: randomSize2,
      G: randomSize3,
      GG: randomSize4,
    },
    images: [
      {
        image: copo,
        product_id: index + 200,
      },
    ],
  };
  return product;
});

const esculturasProducts = esculturas.map((escultura, index) => {
  const randomReference = Math.floor(Math.random() * 10000) + 1000;
  const randomPrice = Math.floor(Math.random() * 200) + 50;
  const randomSize1 = Math.floor(Math.random() * 6) + 1;
  const randomSize2 = Math.floor(Math.random() * 6) + 1;
  const randomSize3 = Math.floor(Math.random() * 6) + 1;
  const randomSize4 = Math.floor(Math.random() * 6) + 1;
  const fixedQtd = randomSize1 + randomSize2 + randomSize3 + randomSize4;
  const product = {
    id: index + 700,
    colors: [],
    name: 'Escultura',
    reference: `67.15.${randomReference}`,
    brand_name: 'Marca Moda',
    category_name: 'Esculturas',
    price: randomPrice,
    fixed_qtd: fixedQtd,
    box_price: randomPrice * fixedQtd,
    sizes: {
      P: randomSize1,
      M: randomSize2,
      G: randomSize3,
      GG: randomSize4,
    },
    images: [
      {
        image: escultura,
        product_id: index + 200,
      },
    ],
  };
  return product;
});

const ferramentasProducts = ferramentas.map((ferramenta, index) => {
  const randomReference = Math.floor(Math.random() * 10000) + 1000;
  const randomPrice = Math.floor(Math.random() * 200) + 50;
  const randomSize1 = Math.floor(Math.random() * 6) + 1;
  const randomSize2 = Math.floor(Math.random() * 6) + 1;
  const randomSize3 = Math.floor(Math.random() * 6) + 1;
  const randomSize4 = Math.floor(Math.random() * 6) + 1;
  const fixedQtd = randomSize1 + randomSize2 + randomSize3 + randomSize4;
  const product = {
    id: index + 800,
    colors: [],
    name: 'Ferramenta',
    reference: `67.15.${randomReference}`,
    brand_name: 'Marca Moda',
    category_name: 'Ferramentas',
    price: randomPrice,
    fixed_qtd: fixedQtd,
    box_price: randomPrice * fixedQtd,
    sizes: {
      P: randomSize1,
      M: randomSize2,
      G: randomSize3,
      GG: randomSize4,
    },
    images: [
      {
        image: ferramenta,
        product_id: index + 200,
      },
    ],
  };
  return product;
});

const jaquetasProducts = jaquetas.map((jaqueta, index) => {
  const randomReference = Math.floor(Math.random() * 10000) + 1000;
  const randomPrice = Math.floor(Math.random() * 200) + 50;
  const randomSize1 = Math.floor(Math.random() * 6) + 1;
  const randomSize2 = Math.floor(Math.random() * 6) + 1;
  const randomSize3 = Math.floor(Math.random() * 6) + 1;
  const randomSize4 = Math.floor(Math.random() * 6) + 1;
  const fixedQtd = Math.floor(Math.random() * 6) + 1;
  const product = {
    id: index + 900,
    colors: [],
    name: 'Jaqueta',
    reference: `67.15.${randomReference}`,
    brand_name: 'Marca Moda',
    category_name: 'Jaquetas F',
    price: randomPrice,
    fixed_qtd: fixedQtd,
    box_price: randomPrice * fixedQtd,
    sizes: {
      P: randomSize1,
      M: randomSize2,
      G: randomSize3,
      GG: randomSize4,
    },
    images: [
      {
        image: jaqueta,
        product_id: index + 200,
      },
    ],
  };
  return product;
});

const mesasProducts = mesas.map((mesa, index) => {
  const randomReference = Math.floor(Math.random() * 10000) + 1000;
  const randomPrice = Math.floor(Math.random() * 1000) + 100;
  const fixedQtd = Math.floor(Math.random() * 6) + 1;
  const product = {
    id: index + 1000,
    name: 'Mesa',
    reference: `67.15.${randomReference}`,
    brand_name: 'Marca Moda',
    category_name: 'Mesas',
    price: randomPrice,
    fixed_qtd: fixedQtd,
    box_price: randomPrice * fixedQtd,
    images: [
      {
        image: mesa,
        product_id: index + 200,
      },
    ],
  };
  return product;
});

const mochilasProducts = mochilas.map((mochila, index) => {
  const randomReference = Math.floor(Math.random() * 10000) + 1000;
  const randomPrice = Math.floor(Math.random() * 1000) + 100;
  const fixedQtd = Math.floor(Math.random() * 6) + 1;
  const randomSize1 = Math.floor(Math.random() * 6) + 1;
  const randomSize2 = Math.floor(Math.random() * 6) + 1;
  const randomSize3 = Math.floor(Math.random() * 6) + 1;
  const randomSize4 = Math.floor(Math.random() * 6) + 1;
  const product = {
    id: index + 1100,
    name: 'Mochila',
    reference: `67.15.${randomReference}`,
    brand_name: 'Marca Moda',
    category_name: 'Mochilas',
    group_name: '',
    price: randomPrice,
    fixed_qtd: fixedQtd,
    box_price: randomPrice * fixedQtd,
    colors: [],
    sizes: {
      P: randomSize1,
      M: randomSize2,
      G: randomSize3,
      GG: randomSize4,
    },
    images: [
      {
        image: mochila,
        product_id: index + 200,
      },
    ],
  };
  return product;
});

const toucasProducts = toucas.map((touca, index) => {
  const randomReference = Math.floor(Math.random() * 10000) + 1000;
  const randomPrice = Math.floor(Math.random() * 1000) + 100;
  const fixedQtd = Math.floor(Math.random() * 6) + 1;
  const product = {
    id: index + 1200,
    name: 'Touca',
    reference: `67.15.${randomReference}`,
    brand_name: 'Marca Moda',
    category_name: 'Toucas',
    price: randomPrice,
    fixed_qtd: fixedQtd,
    box_price: randomPrice * fixedQtd,
    images: [
      {
        image: touca,
        product_id: index + 200,
      },
    ],
  };
  return product;
});

const mockProducts2 = [
  {
    id: 2,
    name: 'Jaqueta Rain',
    reference: '61.31.2000',
    brand_name: 'Marca Moda',
    category_name: 'Jaquetas M',
    price: 59.99,
    fixed_qtd: 10,
    box_price: 151.96,
    group_id: 6,
    group_name: 'Masculino',
    result_line: 4705,
    sizes: {
      P: 4,
      M: 1,
      G: 4,
      GG: 1,
    },
    colors: [
      {
        color_name: 'AZUL',
        cod_hex: '3b1ebd',
      },
    ],
    images: [
      {
        image: img2,
      },
    ],
  },
  {
    id: 3,
    name: 'Jaqueta Rain Vermelha',
    reference: '41.31.0000',
    brand_name: 'Marca Moda',
    category_name: 'Jaquetas M',
    price: 79.99,
    box_price: 799.99,
    fixed_qtd: 10,
    group_id: 6,
    group_name: 'Feminino',
    sizes: {
      P: 4,
      M: 1,
      G: 4,
      GG: 1,
    },
    colors: [
      {
        color_name: 'Vermelho',
        cod_hex: 'd93300',
      },
    ],
    images: [
      {
        image: img3,
      },
      {
        image: img11,
      },
    ],
  },
  {
    id: 4,
    name: 'Jaqueta Rain Cinza',
    reference: '99.68.1000',
    brand_name: 'Marca Moda',
    category_name: 'Jaquetas M',
    price: 99.99,
    box_price: 899.1,
    fixed_qtd: 9,
    group_id: 6,
    group_name: 'Feminino',
    sizes: {
      P: 2,
      M: 2,
      G: 3,
      GG: 2,
    },
    colors: [
      {
        color_name: 'Cinza',
        cod_hex: '575757',
      },
    ],
    images: [
      {
        image: img4,
      },
    ],
  },
  {
    id: 9,
    name: 'Jaqueta Rain Cinza',
    reference: '99.68.1000',
    brand_name: 'Marca Moda',
    category_name: 'Jaquetas M',
    price: 109.99,
    box_price: 109.99 * 9,
    fixed_qtd: 9,
    group_id: 6,
    group_name: 'Masculino',
    sizes: {
      P: 2,
      M: 2,
      G: 3,
      GG: 2,
    },
    colors: [
      {
        color_name: 'Cinza',
        cod_hex: '575757',
      },
    ],
    images: [
      {
        image: img5,
      },
      {
        image: img6,
      },
    ],
  },
  {
    id: 7163,
    name: 'CASACO #MO - JMW005',
    reference: '66.08.0082',
    company_id: 1,
    brand_id: 21,
    brand_name: 'MOSAICO',
    category_id: 1036,
    category_name: 'CASACO',
    price: 34,
    fixed_qtd: 18,
    box_price: 612,
    group_id: 4,
    group_name: 'FEMININO',
    result_line: 4705,
    sizes: {
      P: 3,
      M: 6,
      G: 6,
      GG: 3,
    },
    colors: [],
    images: [
      {
        id: 14523,
        image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_16128750774mxmd6bnw6x1imt7ivb3r4.png',
        order: 1,
        product_id: 7163,
      },
      {
        id: 14520,
        image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1612875074z4jjn4g7koa84f5q6dq95l.png',
        order: 2,
        product_id: 7163,
      },
      {
        id: 14519,
        image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1612875074s88vx18riwa4g672povj.png',
        order: 3,
        product_id: 7163,
      },
    ],
  },
  {
    id: 7164,
    name: 'CASACO #MO - JMW018',
    reference: '66.08.0095',
    company_id: 1,
    brand_id: 21,
    brand_name: 'MOSAICO',
    category_id: 1036,
    category_name: 'CASACO',
    price: 34,
    fixed_qtd: 18,
    box_price: 612,
    group_id: 4,
    group_name: 'FEMININO',
    result_line: 4705,
    sizes: {
      P: 3,
      M: 6,
      G: 6,
      GG: 3,
    },
    colors: [
      {
        color_name: 'PRETO/VERMELHO',
        cod_hex: '000000',
        cod_rgb: '0 0 0',
        product_id: 7164,
      },
    ],
    images: [
      {
        id: 14540,
        image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_16128751255wbftngt5vhidxl8zq2ubk.png',
        order: 1,
        product_id: 7164,
      },
      {
        id: 14545,
        image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1612875134rougpejl0dbp1zkvxix46d.png',
        order: 2,
        product_id: 7164,
      },
      {
        id: 14537,
        image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1612875122a111pj6mbikzqoqwfbc57.png',
        order: 3,
        product_id: 7164,
      },
    ],
  },
  {
    id: 7165,
    name: 'CASACO #MO - JMW019',
    reference: '66.08.0096',
    company_id: 1,
    brand_id: 21,
    brand_name: 'MOSAICO',
    category_id: 1036,
    category_name: 'CASACO',
    price: 34,
    fixed_qtd: 18,
    box_price: 612,
    group_id: 4,
    group_name: 'FEMININO',
    result_line: 4705,
    sizes: {
      P: 3,
      M: 6,
      G: 6,
      GG: 3,
    },
    colors: [
      {
        color_name: 'PRETO/VERMELHO',
        cod_hex: '000000',
        cod_rgb: '0 0 0',
        product_id: 7165,
      },
    ],
    images: [
      {
        id: 14541,
        image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1612875126vo8ba5qfabjfqj5zngn7w.png',
        order: 1,
        product_id: 7165,
      },
      {
        id: 14532,
        image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_16128751161qmewtycck32danbn96bx3.png',
        order: 2,
        product_id: 7165,
      },
      {
        id: 14538,
        image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1612875123aez8uuoyx5xgjosth2bhe.png',
        order: 3,
        product_id: 7165,
      },
    ],
  },
  {
    id: 7155,
    name: 'CASACO MOL. ABER. FEM - M2267',
    reference: '66.01.0059',
    company_id: 1,
    brand_id: 21,
    brand_name: 'MOSAICO',
    category_id: 1036,
    category_name: 'CASACO',
    price: 35.99,
    fixed_qtd: 6,
    box_price: 215.94,
    group_id: 4,
    group_name: 'FEMININO',
    result_line: 4705,
    sizes: {
      P: 2,
      M: 2,
      G: 2,
    },
    colors: [
      {
        color_name: 'MESCLA ESCURO',
        cod_hex: 'ababab',
        cod_rgb: '171 171 171',
        product_id: 7155,
      },
      {
        color_name: 'PRETO/VERMELHO',
        cod_hex: '000000',
        cod_rgb: '0 0 0',
        product_id: 7155,
      },
    ],
    images: [
      {
        id: 14526,
        image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1612875078gaj026olxlgypfwvlgh5u.png',
        order: 1,
        product_id: 7155,
      },
      {
        id: 14521,
        image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1612875075jlbuqrfwm7bszxaocvq6to.png',
        order: 2,
        product_id: 7155,
      },
      {
        id: 14522,
        image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_16128750757rmigbqbhx078i7f758ns4.png',
        order: 3,
        product_id: 7155,
      },
    ],
  },
];

bermudasProducts.forEach((bermuda) => mockProducts2.push(bermuda));
botasProducts.forEach((bota) => mockProducts2.push(bota));
chinelosProducts.forEach((chinelo) => mockProducts2.push(chinelo));
esculturasProducts.forEach((escultura) => mockProducts2.push(escultura));
ferramentasProducts.forEach((ferramenta) => mockProducts2.push(ferramenta));
jaquetasProducts.forEach((jaqueta) => mockProducts2.push(jaqueta));
mochilasProducts.forEach((mochila) => mockProducts2.push(mochila));

function enrichProductData(products) {
  const types = ['Importado', 'Nacional', 'Private Label'];
  const subCategories = ['Algodão', 'Poliéster', 'Viscose', 'Seda', 'Linho'];
  const deliveries = ['Pronta Entrega', 'Programado'];

  return products.map((product) => {
    const type = types[Math.floor(Math.random() * types.length)];
    const subCategory = subCategories[Math.floor(Math.random() * subCategories.length)];
    const delivery = deliveries[Math.floor(Math.random() * deliveries.length)];
    return { ...product, type, sub_category: subCategory, delivery };
  });
}

// Exemplo de uso
const mockProducts = enrichProductData(mockProducts2);

// const mockProducts = mockProcutsBase.map((product) => {
//   const filteredImages = [];
//   product.images.forEach((image) => {
//     try {
//       const img = new Image();
//       img.src = image.image;

//       img.onload = () => {
//         filteredImages.push(image);
//       };

//       img.onerror = () => {
//         console.log(`Failed to load image: ${image.image}`);
//       };
//     } catch (err) {
//       console.log(err);
//     }
//   });

//   return { ...product, images: filteredImages };
// });

export default mockProducts;
