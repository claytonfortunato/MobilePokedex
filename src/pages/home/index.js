import { useState, useEffect } from "react";

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Header } from "../../components/header";
import { Card } from "../../components/card";

import api from "../../services/api";

import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const [pokemons, setPokemons] = useState();
  const [inputValue, setInputValue] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await api.get("/pokemon");
        const { results } = response.data;
        const payloadPokemons = await Promise.all(
          results.map(async (pokemon) => {
            const { id, types } = await getMoreInfoAboutPokemonsByUrl(
              pokemon.url
            );
            return {
              name: pokemon.name,
              id,
              types,
            };
          })
        );
        setPokemons(payloadPokemons);
      } catch (err) {
        console.log(err);
      }
    }
    getPokemons();
  }, []);

  async function getMoreInfoAboutPokemonsByUrl(url) {
    const response = await api.get(url);

    const { id, types } = response.data;

    return { id, types };
  }

  const handleSearch = () => {
    if (!inputValue) return;

    let input = inputValue;
    setInputValue("");
    navigation.navigate("Search", { name: input });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#747476" />
        </TouchableOpacity>
        <TextInput
          placeholder="Qual pokémon você está procurando?"
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
      </View>

      <FlatList
        data={pokemons}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Card data={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    height: "100%",
  },
  form: {
    backgroundColor: "#f2f2f2",
    width: "96%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 20,
  },
  input: {
    width: "90%",
    gap: 10,
    fontSize: 16,
    fontWeight: "400",
  },
});
