import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const ElementView = (props: any) => {
  return (
    <SafeAreaView>
      <Text>This is a basic element # {props.id}</Text>
    </SafeAreaView>
  );
};

export default ElementView;
