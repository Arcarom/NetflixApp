/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View} from 'react-native';

import styles from './styles';

import {Button, Title} from 'react-native-paper';

import Header from '../../components/header';
import Hero from '../../components/Hero';
import ButtonVertical from '../../components/ButtonVertical';

import Previas from '../../components/Previas';
import Secao from '../../components/secao';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Hero />
      <View style={styles.menuHeader}>
        <ButtonVertical icon="plus" text="Minha Lista" />
        <Button icon="play" mode="contained" color="#fff">
          Assistir
        </Button>
        <ButtonVertical icon="information-outline" text="Saiba Mais" />
      </View>

      <View style={styles.previaContainer}>
        <Title style={styles.previaTitle}>Prévias</Title>
        <Previas />
      </View>

      {[1, 2, 3, 4].map((secao, index) => (
        <Secao hasTopBorder key={index} />
      ))}
    </ScrollView>
  );
};

export default Home;
