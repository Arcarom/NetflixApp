import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const ButtonVertical = ({icon, text}) => {
  return (
    <TouchableOpacity style={styles.Button}>
      <Icon name={icon} color="#fff" size={20} />
      <Text style={styles.Text}> {text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonVertical;
