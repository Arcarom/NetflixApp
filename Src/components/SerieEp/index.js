import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Title, Caption} from 'react-native-paper';

const SerieEp = () => {
  return (
    <TouchableOpacity>
      <View style={styles.direction}>
        <Image
          style={styles.Image}
          source={{uri: 'https://cdn.wallpapersafari.com/86/29/kZs36U.jpg'}}
        />
        <View>
          <Title style={styles.Text}>Nome Do Episódio</Title>
          <Caption style={styles.margin}>45 min.</Caption>
        </View>
      </View>
      <Caption style={styles.argumento}>
        they are many variation of passages of lorem Ipsum available. but the
        majority have suffered alteration in some form, by injected humour.
      </Caption>
    </TouchableOpacity>
  );
};

export default SerieEp;

/*
 <View>
      <Title style={styles.titulo}>Lista de Episódios</Title>
      <View style={styles.direction}>
        <Image
          style={styles.Image}
          source={{uri: 'https://cdn.wallpapersafari.com/86/29/kZs36U.jpg'}}
        />
        <Text style={{color: '#fff'}}>1. Nome Do Episódio</Text>
      </View>
    </View>


*/
