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

      setPokemons(response.data);
    };

    fetchApi();
  });

  return (
    <View>
      <Header />
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item }) => console.log(item)}
      />
    </View>
  );
};
