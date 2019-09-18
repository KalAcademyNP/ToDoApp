import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {lighterWhite} from '../utils/colors';
MaterialIcons.loadFont();

const Button = ({deleteAllItems}) => (
  <TouchableOpacity onPress={deleteAllItems}>
    <MaterialIcons name="delete-sweep" size={24} color={lighterWhite} />
  </TouchableOpacity>
);

export default Button;
