import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import styles from './styles';

import ButtonVertical from '../../components/ButtonVertical';
import secao from '../../components/secao';

import {Title, Button, Paragraph, Caption} from 'react-native-paper';
import Secao from '../../components/secao';

const Filme = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{uri: 'https://i.imgur.com/EJyDFeY.jpg'}}
        style={styles.hero}
      />
      <View style={styles.containerPadding}>
        <Title>Nome do Filme</Title>
        <Button
          style={styles.buttonPlay}
          icon="play"
          mode="contained"
          color="#fff">
          Assistir
        </Button>
        <Paragraph>
          Pregadores Profanos, Autoridades Corruptas. Amantes Assassinos. Numa
          cidade cheia de pecadores, um jovem busca justiça
        </Paragraph>
        <Caption style={styles.captionInfos}>
          Elenco:{' '}
          <Caption style={styles.captionWhite}>
            Silvino Sampaio, Juliana Righi, Omar Sampaio Mikael Lopes.
          </Caption>
          Gêneros:{' '}
          <Caption style={styles.captionWhite}>
            Ação, Aventura, Dramático.
            <Caption />
          </Caption>
          Cenas e momentos:
          <Caption style={styles.captionWhite}>Violentos.</Caption>
        </Caption>

        <View style={styles.menu}>
          <ButtonVertical icon="plus" text="Minha Lista" />
          <ButtonVertical icon="thumb-up" text="Classifique" />
          <ButtonVertical icon="send" text="Compartilhe" />
          <ButtonVertical icon="download" text="Baixar" />
        </View>
      </View>
      <Secao hasTopBorder />
      <Secao />
      <Secao />
    </ScrollView>
  );
};

export default Filme;
