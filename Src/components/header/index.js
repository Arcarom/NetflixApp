import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
//linear Gradient colocando as cores inicias e finais do local
const Header = () => {
  return (
    <LinearGradient
      style={styles.header}
      colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}>
      <View style={styles.upSafeAreaView}>
        <Image source={require('../../Pages/assets/1logo-compact.png')} />
        <TouchableOpacity>
          <Text style={styles.textWithe}> Séries</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textWithe}> Filmes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textWithe}> Minha Lista</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Header;
