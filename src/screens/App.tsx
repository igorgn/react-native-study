import React, { useState, useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const apiToFetch = 'https://api.thecatapi.com/v1/images/search?limit=10&page=1';
type listElement = {
  id: string;
  url: string;
};

const ElementView = ({ id, url }: listElement) => (
  <TouchableOpacity>
    <Image style={styles.image} key={id} source={{ uri: url }} />
  </TouchableOpacity>
);

const App = () => {
  const [DATA, updateData] = useState({ data: [] });

  const fetchCats = async () => {
    const resp = await fetch(apiToFetch);
    const respJson = await resp.json();
    updateData({ data: respJson });
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
  image: {
    width: '100%',
    height: 200,
    borderRadius: 4,
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
