/* eslint-disable camelcase */
//

import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';

export default function ProductCartCard({ product, discount }) {
  const {
    imageUrl,
    reference,
    name,
    colors,
    sizes,
    total,
    quantity,
  } = product;

  const BRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  const objectSizes = Object.values(sizes);

  const discountValue = discount * total;

  const totalQuantity = objectSizes
    .reduce((acc, cur) => acc + cur * quantity, 0);
  const entriesSizes = Object.entries(sizes);

  const styles = StyleSheet.create({
    cardContainer: {
      width: '90%',
      flexDirection: 'row',
      height: 124,
      margin: 8,
      justifyContent: 'space-between',
      borderRadius: 5,
    },
    cardImageWithInfosContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    cardInfosContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingVertical: 4,
      width: '100%',
    },
    pricesWithSizesContainer: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      padding: 4,
    },
    containerImage: {
      width: '100%',
      maxWidth: 80,
    },
    cardImage: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
    },
    primaryText: {
      color: '#000',
      fontSize: 12,
      fontWeight: '400',
    },
    secondaryText: {
      color: '#656262',
      fontSize: 12,
      fontWeight: '300',
    },
    colorContainer: {
      padding: 4,
      borderRadius: 10,
    },
    colorText: {
      color: '#FFF',
      textAlign: 'center',
      fontSize: 8,
      fontWeight: '500',
    },
    sizesContainer: {
      flexDirection: 'row',
    },
    keyValueContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sizeContent: {
      minWidth: 30,
      display: 'flex',
      color: '#000',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 18,
      padding: 4,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#D9D9D9',
    },
    totalSizeTag: {
      backgroundColor: '#000',
      color: '#fff',
    },
    totalQuantitySize: {
      backgroundColor: '#809CAA',
      color: '#fff',
    },
  });

  return (
    <View style={ styles.cardContainer }>
      <View style={ styles.cardImageWithInfosContainer }>
        <View style={ styles.containerImage }>
          <Image source={ { uri: imageUrl[0].image } } style={ styles.cardImage } />
        </View>
        <View style={ styles.cardInfosContainer }>
          <Text style={ styles.primaryText }>
            REF:
            {' '}
            <Text style={ styles.secondaryText }>
              {reference}
            </Text>
          </Text>
          <Text style={ styles.primaryText }>
            {name}
          </Text>
          {colors.map(({ cod_hex, color_name }) => (
            <View
              key={ cod_hex }
              style={ [styles.colorContainer, { backgroundColor: `#${cod_hex}` }] }
            >
              <Text style={ styles.colorText }>{color_name}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={ styles.pricesWithSizesContainer }>
        <View style={ styles.sizesContainer }>
          {entriesSizes.map((size) => (
            <View key={ size } style={ styles.keyValueContainer }>
              <Text style={ styles.sizeContent }>
                { size[0]}
              </Text>
              <Text style={ styles.sizeContent }>
                {size[1] * quantity}
              </Text>
            </View>
          ))}

          <View style={ styles.keyValueContainer }>
            <Text style={ [styles.sizeContent, styles.totalSizeTag] }>TOTAL</Text>
            <Text style={ [styles.totalQuantitySize, styles.sizeContent] }>
              {totalQuantity}
            </Text>
          </View>
        </View>
        <Text style={ styles.primaryText }>
          Descontos:
          {' '}
          {BRL.format(discountValue)}
        </Text>
        <Text style={ styles.primaryText }>
          Impostos: R$
          {' '}
          {0}
        </Text>
        <Text style={ styles.primaryText }>
          Total
          {' '}
          {BRL.format(total)}
        </Text>
      </View>
    </View>
  );
}
