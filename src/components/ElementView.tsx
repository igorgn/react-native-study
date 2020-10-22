import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

const ElementView = (props: { id: string; url: string }) => {
  return (
    <TouchableOpacity>
      <Image style={styles.image} key={props.id} source={{ uri: props.url }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderRadius: 4,
  },
});

export default ElementView;
