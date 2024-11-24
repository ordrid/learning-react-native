import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View contentContainerStyle={styles.container}>
      <ScrollView>
        <Image source={logoImg} style={{ width: 200, height: 200 }} />
        <Text>
          Voluptate reprehenderit voluptate officia nisi labore minim ipsum eu
          aute adipisicing dolor exercitation fugiat elit. Laboris fugiat
          ullamco id eiusmod irure culpa do qui officia ea mollit aute. Ipsum
          cillum aute irure est minim sint elit voluptate minim tempor
          reprehenderit aliqua nulla do. Officia est cillum est officia enim
          amet adipisicing eiusmod aliqua qui commodo reprehenderit deserunt.
          Dolor adipisicing sit elit nisi consequat ullamco non enim sint sunt
          Lorem reprehenderit sint. Pariatur tempor eu ut laboris elit
          adipisicing exercitation exercitation sunt incididunt in aute. Et
          consequat magna ullamco esse exercitation ipsum enim laborum dolor
          sint occaecat nostrud. Occaecat veniam nisi ex dolor magna dolor
          exercitation esse magna fugiat enim aute. Consectetur anim consectetur
          duis aute et tempor ipsum. Velit ea aliquip duis et in aliquip nulla
          dolore laboris nostrud nostrud aliquip. Ullamco nisi officia qui
          cillum pariatur in amet nisi non. Officia exercitation ullamco
          consectetur reprehenderit ad. Id aute labore ullamco dolor duis irure
          aliquip deserunt anim irure. Eiusmod nulla occaecat ullamco aute
          mollit incididunt. Proident irure adipisicing amet elit ex consectetur
          in anim. Labore sit ex dolor voluptate amet est nulla nulla nisi
          adipisicing consectetur culpa esse commodo. In duis ea nisi id tempor
          pariatur tempor consequat. Dolor enim incididunt laborum deserunt
          laborum commodo incididunt. Nostrud laborum nostrud eiusmod aliqua. Ad
          in cillum in laborum adipisicing labore officia amet quis. Dolore ut
          ipsum est nostrud dolor Lorem occaecat Lorem esse consectetur nulla.
          Duis elit consequat do aliqua ut velit et aute elit ad. Cupidatat
          reprehenderit labore commodo laborum ea in aute id veniam sunt sunt
          est in enim. Et ullamco consectetur ea duis adipisicing ut
          exercitation reprehenderit cillum mollit. Cillum minim ullamco commodo
          nostrud ex elit voluptate id pariatur ad. Nisi non laborum quis culpa
          occaecat consectetur non excepteur. Laborum dolore reprehenderit
          tempor sit amet. Aliqua sint nisi magna ut non duis nostrud Lorem. Sit
          duis cupidatat enim laboris non excepteur ipsum quis excepteur commodo
          do consequat quis cupidatat. Nulla nisi eu aute tempor aliqua velit
          Lorem Lorem officia. Minim fugiat nulla excepteur ea ut tempor aute
          et. Ad mollit sint proident occaecat eiusmod laboris esse dolor.
        </Text>
        <Image source={logoImg} style={{ width: 200, height: 200 }} />
      </ScrollView>
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
