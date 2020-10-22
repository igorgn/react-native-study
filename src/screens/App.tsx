import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import ElementView from '../components/ElementView';

const apiToFetch = 'https://api.thecatapi.com/v1/images/search?limit=10&page=1';

type listElement = {
  id: string;
  url: string;
};

const App = () => {
  const [DATA, updateData] = useState({ data: [] });
  const [isRefreshing, setRefreshing] = useState(false);

  const fetchCats = async () => {
    setRefreshing(true);
    const resp = await fetch(apiToFetch);
    const respJson = await resp.json();
    updateData({ data: respJson });
    setRefreshing(false);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const renderItem = ({ item }: { item: listElement }) => (
    <ElementView id={item.id} url={item.url} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onRefresh={fetchCats}
        refreshing={isRefreshing}
      />
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
