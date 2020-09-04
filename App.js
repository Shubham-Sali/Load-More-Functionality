import React, { Component } from 'react';
//import react in our code.

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home';
import LoadMoreFun from './screen/LoadMoreFun';
import TypesToast from './screen/TypesToast';
import SeeMoreLessThan from './screen/SeeMoreLessThan'
import CheckConnectivity from './screen/connectivityCheck'
//import all the components we are going to use.

const Stack = createStackNavigator();

export default class App extends Component {
render() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} initialRouteName="Home"/>
        <Stack.Screen name="LoadMoreFun" component={LoadMoreFun} />
        <Stack.Screen name="TypesToast" component={TypesToast} />
        <Stack.Screen name="SeeMoreLessThan" component={SeeMoreLessThan} />
        <Stack.Screen name="CheckConnectivity" component={CheckConnectivity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}