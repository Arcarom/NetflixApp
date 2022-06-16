import React from 'react';
import {ImageBackground, ScrollView, View, FlatList} from 'react-native';
import styles from './styles';

import ButtonVertical from '../../components/ButtonVertical';

import {Title, Button, Paragraph, Caption} from 'react-native-paper';
import BotaoTemporada from '../../components/BotaoTemporada';

import SerieEp from '../../components/SerieEp';

const Serie = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{uri: 'https://i.imgur.com/EJyDFeY.jpg'}}
        style={styles.hero}
      />
      <View style={styles.containerPadding}>
        <Title>Nome da Série</Title>
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
      <BotaoTemporada />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({item, index}) => <SerieEp key={index} />}
      />
    </ScrollView>
  );
};

export default Serie;
