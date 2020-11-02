import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { listElement } from '../components';

const iconsBaseApi = 'https://cryptoicons.org/api/icon/';

const ElementView = (props: listElement) => {
  const iconURI = iconsBaseApi + props.symbol.toLowerCase() + '/50';
  console.log(iconURI);
  return (
    <TouchableOpacity>
      <View style={styles.element}>
        <Image style={styles.image} source={{ uri: iconURI }} />
        <Text>
          {props.symbol} | {props.name}
          has price of {props.quote.USD.price} USD
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  element: {
    width: '100%',
    height: 60,
    borderRadius: 4,
    flexDirection: 'row',
    margin: 5,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
});

export default ElementView;
