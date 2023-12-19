import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

const mock = {
  clientName: 'Empresa A Ltda.',
  clientCNPJ: '12.345.678/0001-90',
  clientFantasyName: 'A Tech',
  orderNumber: 1849302,
  orderDate: '19/12/2023',
  deadline: 'Dezembro (1 a 31/23)',
  shippment: 'NOVA TRANSPORTADORA',
  hour: '16:11:10',
  productsCart: [
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
      quantity: 4,
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
      total: 599.76,
      id: '7364',
    },
  ],
  paymentCondition: {
    method: '120',
    installments: 1,
    discount: 0,
  },
  installmentsValue: 899.64,
  totalValue: 899.64,
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

      backgroundColor: '#E4E4E4',
    },
    labelOrder: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    inputsContainer: {
      display: 'flex',
      marginTop: 20,
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      marginBottom: '8px',
      gap: '10px',
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
              <View style={ styles.labelOrder } key={ tag }>
                <Text>
                  { tag }
                  :
                  {' '}
                </Text>
                <Text>{ contents[index] }</Text>
              </View>
            ))
          }
        </View>
        <View />
      </Page>
    </Document>
  );
}
