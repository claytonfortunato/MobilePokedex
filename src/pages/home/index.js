import { useState, useEffect } from "react";

import { Text, View, StyleSheet, FlatList } from "react-native";
import { Header } from "../../components/header";

import api from "../../services/api";
import { Card } from "../../components/card";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
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
    };

    fetchApi();
  });

  return (
    <View>
      <Header />
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item: pokemon }) => <Card data={pokemon} />}
      />
    </View>
  );
};
