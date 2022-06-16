import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {List} from 'react-native-paper';
import styles from './styles';

const BotaoTemporada = () => {
  return (
    <View>
      <List.Section style={styles.barView}>
        <List.Accordion title="Temporada 1">
          <TouchableOpacity style={styles.serieButton}>
            <Text style={styles.serieButton}> Temporada 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serieButton}>
            <Text style={styles.serieButton}> Temporada 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serieButton}>
            <Text style={styles.serieButton}> Temporada 3 </Text>
          </TouchableOpacity>
        </List.Accordion>
      </List.Section>
    </View>
  );
};

export default BotaoTemporada;

/*

  import {useState} from 'react';

  const [click, setClick] = useState(true);
  const clickOn = () => setClick(!click);

      <List.Accordion
        title="Teste"
        left={props => <List.Icon {...props} icon="plus" />}
        expanded={click}
        onPress={clickOn}>
        <List.Item title="TItulo Teste 1" />
        <List.Item title="Temporada 2" />

      </List.Accordion>
      // testando <ListAcordion>
*/
