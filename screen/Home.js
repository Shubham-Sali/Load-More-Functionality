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

//import all the components we are going to use.

export default Home = ({navigation}) => {
      return(
         <View style={styles.container}>
           <TouchableOpacity
              style={{...styles.button, marginBottom: 12}}
              onPress={() => navigation.navigate('LoadMoreFun')}
           >
           <Text>Load More Functionality</Text>
           </TouchableOpacity>

            <TouchableOpacity
              style={{...styles.button, marginBottom: 12}}
              onPress={() => navigation.navigate('TypesToast')}
           >
           <Text>Types of Toast</Text>
           </TouchableOpacity>

            <TouchableOpacity
              style={{...styles.button, marginBottom: 12}}
              onPress={() => navigation.navigate('SeeMoreLessThan')}
           >
           <Text>Swiper Slider</Text>
           </TouchableOpacity>

             <TouchableOpacity
              style={{...styles.button, marginBottom: 12}}
              onPress={() => navigation.navigate('CheckConnectivity')}
           >
           <Text>Check Connectivity</Text>
           </TouchableOpacity>
         </View>
      )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});