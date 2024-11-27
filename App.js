import { Image, Button, Pressable, StyleSheet, Text, View } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View contentContainerStyle={styles.container}>
      <Button
        title="Press"
        onPress={() => console.log("Button pressed")}
        color="midnightblue"
        disabled
      >
        Press
      </Button>

      <Pressable
        // onPress={() => {
        //   console.log("Image pressed");
        // }}
        onLongPress={() => {
          console.log("Pressable: long press");
        }}
        onPressIn={() => {
          console.log("Pressable: press in");
        }}
        onPressOut={() => {
          console.log("Pressable: press out");
        }}
      >
        <Image source={logoImg} style={{ width: 100, height: 100 }} />
      </Pressable>

      <Pressable
        onPress={() => {
          console.log("Text pressed");
        }}
      >
        <Text>
          Laborum adipisicing veniam minim quis id occaecat enim. Cillum laboris
          fugiat ipsum eiusmod enim exercitation mollit. Ipsum elit tempor sint
          adipisicing ea. Cillum sint minim irure et. Dolor ipsum excepteur
          culpa aute. Laboris irure in minim officia aute nostrud voluptate
          voluptate excepteur magna eu id pariatur elit. Dolor exercitation
          adipisicing commodo occaecat eiusmod labore eu. Ad nostrud nostrud
          ipsum ipsum occaecat culpa Lorem nisi adipisicing laborum. Sint
          voluptate elit Lorem Lorem tempor aute. Cillum occaecat amet qui esse
          sit do elit dolor ullamco deserunt. Elit amet nostrud nisi ipsum
          cupidatat reprehenderit. Esse nostrud incididunt tempor culpa non
          aliquip minim incididunt aute. Laborum sint nisi mollit irure
          consequat tempor tempor irure duis sint velit commodo ipsum id.
          Voluptate ipsum labore aliquip nisi elit in magna non. Aute pariatur
          deserunt veniam sint est ea aliqua pariatur. Aliquip veniam Lorem
          deserunt consectetur irure amet reprehenderit exercitation. Commodo
          mollit elit ipsum cillum adipisicing Lorem magna in. Dolore nostrud
          aliqua consequat non ex laborum dolor ad enim eu exercitation.
          Deserunt eiusmod et sunt qui amet. Officia dolore mollit ad incididunt
          exercitation Lorem excepteur cillum qui. Quis nostrud amet consequat
          irure anim ad quis. Anim aliquip id ipsum labore ea do id. Deserunt
          nulla veniam irure est in minim labore eu duis sunt ut ea id. Culpa
          consectetur est cupidatat tempor elit. Veniam ut dolore incididunt
          duis dolore.
        </Text>
      </Pressable>
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
