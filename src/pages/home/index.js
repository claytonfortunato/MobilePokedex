import { useState, useEffect } from "react";

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Header } from "../../components/header";

import api from "../../services/api";
import { Card } from "../../components/card";

export const Home = () => {
  const [pokemons, setPokemons] = useState();

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

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TouchableOpacity>
          <Ionicons name="search" size={28} color="#747476" />
        </TouchableOpacity>
        <TextInput
          placeholder="Qual pokémon você está procurando?"
          style={styles.input}
        />
      </View>

      <FlatList
        data={pokemons}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item }) => <Card data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
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
    marginBottom: 24,
  },
  input: {
    width: "90%",
    gap: 10,
    fontSize: 16,
    fontWeight: "400",
  },
});
