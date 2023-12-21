/* eslint-disable max-lines */
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import ProductCartCard from './ProductCardPdf';

const mock = {
  clientName: 'Empresa A Ltda.',
  clientCNPJ: '12.345.678/0001-90',
  clientFantasyName: 'A Tech',
  orderNumber: 1307559,
  orderDate: '20/12/2023',
  deadline: 'Janeiro (1 a 31/24)',
  shippment: 'CORREIOS',
  hour: '09:17:58',
  productsCart: [
    {
      name: 'BLUSA MC FEM - M4644 BRANCO',
      reference: '67.15.0829',
      imageUrl: [
        {
          id: 29235,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1626276376b7ti6sui2qn97542jyh6.png',
          order: 1,
          product_id: 7346,
        },
        {
          id: 29229,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_16262763745x7il21crzsi5ehq5ukpyd.png',
          order: 2,
          product_id: 7346,
        },
        {
          id: 29238,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_16262763811z8aopmujsjcrn59egeqhf.png',
          order: 3,
          product_id: 7346,
        },
      ],
      sizes: {
        P: 1,
        M: 2,
        G: 2,
        GG: 1,
      },
      quantity: 3,
      pack: 6,
      price: 24.99,
      colors: [
        {
          color_name: 'BRANCO/VINHO',
          cod_hex: 'ffffff',
          cod_rgb: '255 255 255',
          product_id: 7346,
        },
      ],
      total: 449.82,
      id: '7346',
    },
    {
      name: 'BLUSA CROPPED FEM - M4759',
      reference: '67.15.0833',
      imageUrl: [
        {
          id: 29250,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1626276389v7n03papgd0tu3jhnmbs2a.png',
          order: 1,
          product_id: 7350,
        },
        {
          id: 29252,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_16262763905xk1b0176jxheyvr6kzk.png',
          order: 2,
          product_id: 7350,
        },
      ],
      sizes: {
        P: 1,
        M: 2,
        G: 2,
        GG: 1,
      },
      quantity: 5,
      pack: 6,
      price: 18.99,
      colors: [
        {
          color_name: 'ROSA',
          cod_hex: 'e8a2a8',
          cod_rgb: '232 162 168',
          product_id: 7350,
        },
      ],
      total: 569.6999999999999,
      id: '7350',
    },
    {
      name: 'REGATA CROPPED FEM - M4858',
      reference: '67.15.0837',
      imageUrl: [
        {
          id: 26166,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1622660547wppktshf49ou3ceusp2279.png',
          order: 1,
          product_id: 7352,
        },
        {
          id: 26141,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_162266052896n0xkcfd4hcs9angifrm4.png',
          order: 2,
          product_id: 7352,
        },
        {
          id: 26136,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1622660528nxsf3qftfhm3091p7pwq3r.png',
          order: 3,
          product_id: 7352,
        },
      ],
      sizes: {
        P: 1,
        M: 2,
        G: 2,
        GG: 1,
      },
      quantity: 4,
      pack: 6,
      price: 18.99,
      colors: [
        {
          color_name: 'ROSA',
          cod_hex: 'e8a2a8',
          cod_rgb: '232 162 168',
          product_id: 7352,
        },
      ],
      total: 455.76,
      id: '7352',
    },
    {
      name: 'BLUSA FEM - M4854',
      reference: '67.15.0838',
      imageUrl: [
        {
          id: 26140,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1622660528yk7fpfsitv4m1ur44pyfp.png',
          order: 1,
          product_id: 7353,
        },
        {
          id: 26182,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1622660556wwl7lqs6r7dhvgwmjmxt.png',
          order: 2,
          product_id: 7353,
        },
        {
          id: 26181,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_16226605550vypltaopxebcmumlud3b5d.png',
          order: 3,
          product_id: 7353,
        },
      ],
      sizes: {
        P: 1,
        M: 2,
        G: 2,
        GG: 1,
      },
      quantity: 2,
      pack: 6,
      price: 19.99,
      colors: [
        {
          color_name: 'PRETO/VERMELHO',
          cod_hex: '000000',
          cod_rgb: '0 0 0',
          product_id: 7353,
        },
        {
          color_name: 'VERMELHO/PRETO',
          cod_hex: 'ed3237',
          cod_rgb: '237 50 55',
          product_id: 7353,
        },
      ],
      total: 239.88,
      id: '7353',
    },
    {
      name: 'CAMISETA FEM - M4676',
      reference: '67.15.0839',
      imageUrl: [
        {
          id: 29254,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1626276392ge4txbgeqzl0gme3zndlwzp.png',
          order: 1,
          product_id: 7354,
        },
        {
          id: 29242,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1626276383bt0lv52pkystctlcxzq03a.png',
          order: 2,
          product_id: 7354,
        },
        {
          id: 29255,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_16262763928zss689rg5h2s83pxh0w.png',
          order: 3,
          product_id: 7354,
        },
      ],
      sizes: {
        P: 1,
        M: 2,
        G: 2,
        GG: 1,
      },
      quantity: 2,
      pack: 6,
      price: 18.99,
      colors: [
        {
          color_name: 'PRETO/VERMELHO',
          cod_hex: '000000',
          cod_rgb: '0 0 0',
          product_id: 7354,
        },
      ],
      total: 227.88,
      id: '7354',
    },
    {
      name: 'BLUSA FEM - M4716',
      reference: '67.15.0841',
      imageUrl: [
        {
          id: 29226,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_16262763718gxseeo4byhjzanx92rwcd.png',
          order: 1,
          product_id: 7356,
        },
        {
          id: 29258,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1626276373y1jwn61didupjkw8qmzp9.png',
          order: 2,
          product_id: 7356,
        },
        {
          id: 29232,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1626276372wvfvrksv562bxa8bxdk5z.png',
          order: 3,
          product_id: 7356,
        },
      ],
      sizes: {
        P: 1,
        M: 2,
        G: 2,
        GG: 1,
      },
      quantity: 5,
      pack: 6,
      price: 24.99,
      colors: [
        {
          color_name: 'BRANCO/VINHO',
          cod_hex: 'ffffff',
          cod_rgb: '255 255 255',
          product_id: 7356,
        },
      ],
      total: 749.6999999999999,
      id: '7356',
    },
    {
      name: 'BLUSA FEM - M4862',
      reference: '67.15.0847',
      imageUrl: [
        {
          id: 29225,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1626276370fg80epabvuauu7548z5zik.png',
          order: 1,
          product_id: 7361,
        },
        {
          id: 29230,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1626276372682hxgltf9wk55shfvna9l.png',
          order: 2,
          product_id: 7361,
        },
      ],
      sizes: {
        P: 1,
        M: 2,
        G: 2,
        GG: 1,
      },
      quantity: 2,
      pack: 6,
      price: 24.99,
      colors: [
        {
          color_name: 'VERDE',
          cod_hex: '6da85b',
          cod_rgb: '109 168 91',
          product_id: 7361,
        },
      ],
      total: 299.88,
      id: '7361',
    },
    {
      name: 'BLUSA FEM - M4892',
      reference: '67.15.0848',
      imageUrl: [
        {
          id: 29231,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1626276373sdekghz6s4nsbqm9mmzem9.png',
          order: 1,
          product_id: 7362,
        },
        {
          id: 29227,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_16262763725l7jblrg0b5piuf4j0b19m.png',
          order: 2,
          product_id: 7362,
        },
        {
          id: 29260,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1626276395picdyv9wrmjk1e4ri58m.png',
          order: 3,
          product_id: 7362,
        },
      ],
      sizes: {
        P: 1,
        M: 2,
        G: 2,
        GG: 1,
      },
      quantity: 3,
      pack: 6,
      price: 21.99,
      colors: [
        {
          color_name: 'PRETO/VERMELHO',
          cod_hex: '000000',
          cod_rgb: '0 0 0',
          product_id: 7362,
        },
      ],
      total: 395.82,
      id: '7362',
    },
    {
      name: 'BLUSA FEM - M4807',
      reference: '67.15.0849',
      imageUrl: [
        {
          id: 29776,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1626697499gh0xafs39xnzg8ym6zrr7.png',
          order: 1,
          product_id: 7363,
        },
        {
          id: 29783,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1626697501och310j1f3a5lezq5c5my6.png',
          order: 2,
          product_id: 7363,
        },
      ],
      sizes: {
        P: 1,
        M: 2,
        G: 2,
        GG: 1,
      },
      quantity: 2,
      pack: 6,
      price: 24.99,
      colors: [
        {
          color_name: 'PRETO/VERMELHO',
          cod_hex: '000000',
          cod_rgb: '0 0 0',
          product_id: 7363,
        },
      ],
      total: 299.88,
      id: '7363',
    },
    {
      name: 'BLUSA FEM - M4753',
      reference: '67.15.0850',
      imageUrl: [
        {
          id: 29777,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1626697499dyne5uvesxprk0wr3uks6.png',
          order: 1,
          product_id: 7364,
        },
        {
          id: 29778,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_1626697501d4e8w4u3dl77lqjyrk6qpy.png',
          order: 2,
          product_id: 7364,
        },
        {
          id: 29779,
          image: 'https://marquente.painel.e-catalogos.net/storage/2463/2463_16266975020glwkow8zj9lsvncadczy6b.png',
          order: 3,
          product_id: 7364,
        },
      ],
      sizes: {
        P: 1,
        M: 2,
        G: 2,
        GG: 1,
      },
      quantity: 2,
      pack: 6,
      price: 24.99,
      colors: [
        {
          color_name: 'PRETO/VERMELHO',
          cod_hex: '000000',
          cod_rgb: '0 0 0',
          product_id: 7364,
        },
      ],
      total: 299.88,
      id: '7364',
    },
  ],
  paymentCondition: {
    method: '120',
    installments: 1,
    discount: 0,
  },
  installmentsValue: 3988.2000000000003,
  totalValue: 3988.2000000000003,
  priceTable: 'REPRESENTACAO',
};

export function MyPdfDocument() {
  const {
    clientName,
    clientCNPJ,
    orderNumber,
    orderDate,
    deadline,
    shippment,
    installmentsValue,
    totalValue,
    paymentCondition,
  } = mock;

  const { method, installments } = paymentCondition;

  const BRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const tags = ['Razão Social', 'CNPJ', 'N° do pedido', 'Data',
    'Entrega', 'Transportadora', 'Condição de pagamento',
    'Parcelas', 'Total'];
  const contents = [
    clientName,
    clientCNPJ,
    orderNumber,
    orderDate,
    deadline,
    shippment,
    method,
    `${installments}x de ${BRL.format(installmentsValue)}`,
    BRL.format(totalValue),
  ];

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    inputsContainer: {
      padding: 10,
      width: '95%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    inputContainer: {
      backgroundColor: '#F0F0F0',
      padding: 3,
      borderRadius: 3,
      marginTop: 4,
    },
    inputTag: {
      color: '#000',
      fontSize: 14,
      fontWeight: '400',
    },
    inputContent: {
      color: '#000',
      fontSize: 12,
      fontWeight: '300',
    },
    titleOrder: {
      marginTop: 10,
      fontSize: 24,
    },
  });

  return (
    <Document>
      <Page size="A4" style={ styles.page }>
        <View style={ styles.inputsContainer }>
          {
            tags.map((tag, index) => (
              <View
                key={ tag }
                style={ [styles.inputContainer, {
                  width: tag === 'Total' ? '100%' : '49%',
                }] }
              >
                <Text style={ styles.inputTag }>
                  {tag}
                  {': '}
                  <Text style={ styles.inputContent }>
                    {contents[index]}
                  </Text>
                </Text>
              </View>
            ))
          }
        </View>
        {
          mock.productsCart.map((product, i) => (
            <ProductCartCard
              key={ i }
              product={ product }
              discount={ mock.paymentCondition.discount }
            />
          ))
        }
      </Page>
    </Document>
  );
}
