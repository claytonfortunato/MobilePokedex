import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Card } from "../../components/card";
import api from "../../services/api";

export const Search = () => {
  const route = useRoute();

  const pokemonId = route.params?.data;
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const response = await api.get(`/pokemon?name_like=${pokemonId}`);
      setPokemons(response.data);
    }
    fetchPokemons();
  }, [pokemonId]);

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item }) => <Card data={item} />}
        ListEmptyComponent={() => (
          <Text style={styles.text}>Não encontramos o pokémon desejado..</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 14,
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
  },
});
