import { ImageBackground, StyleSheet, Text, View } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      /> */}

      <ImageBackground source={logoImg} style={{ flex: 1, width: '100%' }}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
});
