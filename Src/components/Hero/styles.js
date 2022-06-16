import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  hero: {
    height: 400,
    width: '100%',
  },
  logo: {
    marginTop: 200,
    alignSelf: 'center',
    width: 300,
    height: 150,
    position: 'absolute',
    zIndex: 10,
  },
  estiloTop10: {
    position: 'absolute',
    bottom: 20,
    marginTop: 320,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  top10Badge: {
    width: 20,
    height: 50,
    marginRight: 10,
  },
  top10Text: {
    color: '#fff',
    fontSize: 15,
  },
  gradient: {
    width: '100%',
    height: 50,
    position: 'absolute',
    zIndex: 9,
    bottom: 0,
  },
});

export default styles;
