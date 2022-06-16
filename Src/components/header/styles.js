import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textWithe: {
    color: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    zIndex: 999,
  },
  upSafeAreaView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    width: '100%',
    height: 70,
    alignItems: 'center',
  },
});

export default styles;
