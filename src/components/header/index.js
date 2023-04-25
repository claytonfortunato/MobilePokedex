import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Pokédex</Text>
      <Text style={styles.box}>
        Pesquise o Pokémon pelo nome ou usando o número do Pokédex nacional.
      </Text>

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
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    gap: 2,
    padding: 20,
    marginTop: 22,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    fontSize: 16,
  },
});
