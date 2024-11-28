import { ActivityIndicator, Alert, Button, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Alert 1" onPress={() => { Alert.alert("Invalid data") }} />

      <Button title="Alert 2" onPress={() => { Alert.alert("Invalid data", "Date of birth incorrect") }} />

      <Button title="Alert 3" onPress={() => { Alert.alert("Invalid data", "Date of birth incorrect", [
        {
          text: "Cancel",
          onPress: () => { console.log("Cancel pressed") }
        },
        {
          text: "Okay",
          onPress: () => { console.log("Okay pressed") }
        }
      ]) }} />
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
    gap: 8
  },
});
