import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { listElement } from '../components';
import ElementView from '../components/ElementView';

const cryptosBaseApi = 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=USD';
const options = {
  headers: {
    Accept: 'application/json',
    // 'Accept-Encoding': 'deflate, gzip',
    'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
  },
  method: 'GET',
};

const App = () => {
  const [DATA, updateData] = useState({ data: [] });
  const [isRefreshing, setRefreshing] = useState(false);

  const fetchCrypto = async () => {
    setRefreshing(true);
    const response = await fetch(cryptosBaseApi, options);
    const responseJson = await response.json();
    updateData({ data: responseJson.data });
    // const icons = await fetchIcons(icon);
    console.log(responseJson.data);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchCrypto();
  }, []);

  const renderItem = ({ item }: { item: listElement }) => <ElementView id={item.id} name={item.name} symbol={item.symbol} quote={item.quote} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA.data} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} onRefresh={fetchCrypto} refreshing={isRefreshing} />
    </SafeAreaView>
  );
};

App.options = {
  topBar: {
    title: {
      text: 'HOME',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
