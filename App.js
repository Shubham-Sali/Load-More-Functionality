import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Platform, ActivityIndicator } from 'react-native';

export default class App extends Component<{}>
{
  constructor()
  {
      super();
      this.state =
      {
          loading: true,
          serverData: [],
          fetching_from_server: false
      }
      this.timer = -1;
      this.page = 0
  }
  componentDidMount()
  {
      this.page = this.page + 1;
      fetch('https://randomuser.me/api/?results=20&gender=female&inc=name&page=' + this.page)
      .then((response) => response.json())
      .then((responseJson) =>
      {
          this.setState({ serverData: [ ...this.state.serverData, ...responseJson.results ], loading: false });
      })
      .catch((error) =>
      {
          console.error(error);
      });
  }

  loadMoreData = () =>
  {        
      this.page = this.page + 1;
      this.setState({ fetching_from_server: true }, () =>
      {
          clearTimeout(this.timer);
          this.timer = -1;
          this.timer = setTimeout(() =>
          {
              fetch('https://randomuser.me/api/?results=20&gender=female&inc=name&?nat=in&page=' + this.page)
              .then((response) => response.json())
              .then((responseJson) =>
              {
                  this.setState({ serverData: [ ...this.state.serverData, ...responseJson.results ], fetching_from_server: false });
              })
              .catch((error) =>
              {
                  console.error(error);
              });
          }, 1500);   
      });
  }

  renderFooter()
  {
    return (
        <View style = { styles.footer }>
            <TouchableOpacity activeOpacity = { 0.9 } onPress = { this.loadMoreData } style = { styles.loadMoreBtn }>
                <Text style = { styles.btnText }>Load More</Text>
                {
                    ( this.state.fetching_from_server )
                    ?
                        <ActivityIndicator color = "white" style = {{ marginLeft: 8 }} />
                    :
                        null
                }
            </TouchableOpacity>                    
        </View>
    )
  }

  render()
  {
    return(
      <View style = { styles.container }>
      {
        ( this.state.loading )
        ?
          ( <ActivityIndicator size = "large" /> )
        :
          (
              <FlatList
                style = {{ width: '100%' }}
                keyExtractor = {( item, index ) => index }
                data = { this.state.serverData }
                renderItem = {({ item, index }) => 
                    <View style = { styles.item }>
                        <Text style = { styles.text }>{ item.name.first.toUpperCase() } { item.name.last.toUpperCase() }</Text>
                    </View>
                }
                ItemSeparatorComponent = {() => <View style = { styles.separator } /> }
                ListFooterComponent = { this.renderFooter.bind( this ) }
              />
          )
      }                
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: ( Platform.OS === 'ios' )? 20 : 0
  },

  item:
  {
    padding: 10
  },

  separator:
  {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },

  text:
  {
    fontSize: 20,
    color: 'black'
  },

  footer:
  {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1.5,
    borderTopColor: 'black'
  },

  loadMoreBtn:
  {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnText:
  {
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  }
});