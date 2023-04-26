import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import pokeball from "../../assets/img/pokeball.png";
import filter from "../../assets/icon/filter.png";
import sort from "../../assets/icon/sort.png";
import generation from "../../assets/icon/generation.png";

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={pokeball} style={styles.cover}>
        <Order />

        <Text style={styles.header}>Pokédex</Text>
        <Text style={styles.box}>
          Pesquise o Pokémon pelo nome ou usando o número do Pokédex nacional.
        </Text>
      </ImageBackground>

      <View style={styles.form}>
        <TouchableOpacity>
          <Ionicons name="search" size={28} color="#747476" />
        </TouchableOpacity>
        <TextInput
          placeholder="Qual pokémon você está procurando?"
          style={styles.input}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ddd",
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
  form: {
    backgroundColor: "#f2f2f2",
    width: "90%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 20,
  },
  input: {
    width: "100%",
    gap: 10,
    fontSize: 16,
    fontWeight: "400",
  },
  cover: {
    height: "100%",
  },
});
