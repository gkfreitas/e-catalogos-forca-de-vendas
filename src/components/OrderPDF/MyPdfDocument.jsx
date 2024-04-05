/* eslint-disable max-lines */
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import ProductCartCard from './ProductCardPdf';

export function MyPdfDocument({ order }) {
  const {
    clientName,
    clientCNPJ,
    orderNumber,
    orderDate,
    deadline,
    shipment,
    installmentsValue,
    totalValue,
    paymentCondition,
  } = order;

  const { method, installments, discount } = paymentCondition;

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
    shipment,
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
          order.productsCart.map((product, i) => (
            <ProductCartCard
              key={ i }
              product={ product }
              discount={ discount }
            />
          ))
        }
      </Page>
    </Document>
  );
}
