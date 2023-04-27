import { useState, useEffect } from "react";

import { Text, View, StyleSheet, FlatList } from "react-native";
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
    <View>
      <Header />
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item }) => <Card data={item} />}
      />
    </View>
  );
};
