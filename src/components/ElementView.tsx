import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { listElement } from '../components';

const iconsBaseApi = 'https://cryptoicons.org/api/icon/';

const ElementView = (props: listElement) => {
  const price = Number(props.quote.USD.price).toFixed(2);
  const hoursChange = Number(props.quote.USD.percent_change_24h.toFixed(2));
  const daysChange = Number(props.quote.USD.percent_change_7d.toFixed(2));

  const hoursColor = hoursChange < 0 ? 'red' : 'green';
  const daysColor = daysChange < 0 ? 'red' : 'green';
  const hoursStyle = {
    color: hoursColor,
  };

  const daysStyle = {
    color: daysColor,
  };

  const iconURI = iconsBaseApi + props.symbol.toLowerCase() + '/50';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.view}>
        <View style={styles.leftUpperView}>
          <Image style={styles.image} source={{ uri: iconURI }} />
          <Text style={styles.symbol}>
            {props.symbol} | {props.name}
          </Text>
        </View>
        <View style={styles.leftUpperView}>
          <Text style={styles.hoursChange}>
            24h: <Text style={hoursStyle}>{hoursChange} %</Text>
          </Text>
        </View>
      </View>
      <View style={styles.view}>
        <Text style={styles.rightText}>{price} $</Text>
        <Text style={styles.rightText}>
          7d: <Text style={daysStyle}>{daysChange} %</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flexDirection: 'row',
  },
  hoursChange: {
    marginLeft: 60,
  },
  symbol: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 20,
    marginTop: 10,
  },
  view: {
    width: '50%',
    height: 60,
    borderRadius: 4,
    margin: 2,
  },
  leftUpperView: {
    height: '50%',
    flexDirection: 'row',
  },
  rightText: {
    textAlign: 'right',
    paddingRight: 30,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  image: {
    width: 40,
    height: 40,
    marginTop: 10,
    borderRadius: 4,
  },
});

export default ElementView;
