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
    <ScrollView>
      <View>
        <Text>{route.params?.data.name}</Text>
        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${route.params?.data.id}.png`,
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 130,
    width: 130,
  },
});
