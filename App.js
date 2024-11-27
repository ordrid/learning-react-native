import { useState } from "react";
import { Button, StyleSheet, StatusBar, View } from "react-native";

export default function App() {
  const [isStatusBarVisible, setStatusBarVisibility] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="lightgreen"
        barStyle="light-content"
        hidden={isStatusBarVisible}
      />

      <Button
        title="Toggle statusbar visibility"
        onPress={() => setStatusBarVisibility(!isStatusBarVisible)}
        color="midnightblue"
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
    padding: 80,
  },
});
