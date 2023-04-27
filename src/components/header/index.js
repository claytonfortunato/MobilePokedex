import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";

import pokeball from "../../assets/img/pokeball.png";
import filter from "../../assets/icon/filter.png";
import sort from "../../assets/icon/sort.png";
import generation from "../../assets/icon/generation.png";

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={pokeball} style={styles.cover}>
        <View style={styles.icons}>
          <Image source={filter} />
          <Image source={sort} />
          <Image source={generation} />
        </View>

        <Text style={styles.header}>Pokédex</Text>
        <Text style={styles.box}>
          Pesquise o Pokémon pelo nome ou usando o número do Pokédex nacional.
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#62B957",
  },
  header: {
    fontSize: 32,
    fontWeight: 700,
  },
  box: {
    fontSize: 16,
    fontWeight: 300,
    lineHeight: 19,
    marginTop: 10,
  },
  cover: {
    height: "100%",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
    marginTop: 22,
  },
});
