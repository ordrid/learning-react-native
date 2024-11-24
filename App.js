import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.blueView}></View>
      <View style={styles.greenView}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueView: {
    width: 200,
    height: 200,
    backgroundColor: 'lightblue',
    margin: 4
  },
  greenView: {
    width: 200,
    height: 200,
    backgroundColor: 'lightgreen',
    margin: 4
  }
});
