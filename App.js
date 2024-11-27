import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <ActivityIndicator size="small" color="midnightblue" animating={false} />
      <ActivityIndicator size="large" color="lightgreen" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
    padding: 80,
  },
});
