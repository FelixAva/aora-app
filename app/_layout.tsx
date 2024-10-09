import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={ styles.container }>
      <Text>RootLayout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
