import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { listElement } from '../components';

const ElementView = (props: listElement) => {
  return (
    <TouchableOpacity style={styles.image}>
      <Text>
        {props.name} has price of {props.quote.USD.price} USD
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 50,
    borderRadius: 4,
  },
});

export default ElementView;
