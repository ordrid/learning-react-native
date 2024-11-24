import {
  Button,
  StyleSheet,
  View,
} from "react-native";

export default function App() {
  return (
    <View contentContainerStyle={styles.container}>
      <Button
        title="Press"
        onPress={() => console.log("Button pressed")}
        color="midnightblue"
        disabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
    padding: 60,
  },
});
