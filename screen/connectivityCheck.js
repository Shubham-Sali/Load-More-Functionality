import React, { Component } from 'react';
import { StyleSheet, Text, View   } from 'react-native';
import NetInfo from '@react-native-community/netinfo'
import {useNetInfo} from "@react-native-community/netinfo";

const App = () => {
  const netInfo = useNetInfo();
  console.log(netInfo);
  return (
    <View style={styles.container}>
      <Text>Type: {netInfo.details.carrier}</Text>
      <Text>Is Connected? {netInfo.isConnected.toString()}</Text>
      <Text>Is WiFi Connected? {netInfo.isWifiEnabled.toString()}</Text>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})