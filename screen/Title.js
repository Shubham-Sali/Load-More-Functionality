import React from 'react';
import {Text, Platform} from 'react-native';

const Title = props => (
  <Text style={[styles.titleStyle, props.style]}>{props.children}</Text>
);

const styles = {
  titleStyle: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
  },
};

export {Title};
