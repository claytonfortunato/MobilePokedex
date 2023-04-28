import { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import api from "../../services/api";

export const Detail = () => {
  const route = useRoute();

  const { pokemonId } = route.params;

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    async function getPokemonDetail() {
      try {
        const response = await api.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        );

        const { stats, abilities, id, name, types } = response.data;

        setPokemon({
          stats,
          abilities,
          id,
          name,
          types,
          color,
        });
      } catch (err) {
        console.log(err);
      }
    }
    getPokemonDetail();
  }, [pokemonId]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapperImage}>
        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${route.params?.data.id}.png`,
          }}
        />
      </View>

      <View style={styles.header}>
        <Text>#{route.params?.data.id}</Text>
        <Text>{route.params?.data.name}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 130,
    width: 130,
  },
});
