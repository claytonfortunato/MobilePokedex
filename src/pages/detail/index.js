import { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import Circle from "../../assets/img/Circle.png";

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
    <View style={styles.container}>
      <ImageBackground source={Circle} style={styles.ImgBackground}>
        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${route.params?.data.id}.png`,
          }}
        />
      </ImageBackground>

      <View style={styles.header}>
        <Text style={styles.id}>#{route.params?.data.id}</Text>
        <Text style={styles.name}>{route.params?.data.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd",
  },
  image: {
    height: 130,
    width: 130,
    marginTop: -10,
  },
  header: {
    flexDirection: "column",
    marginLeft: 32,
  },
  id: {
    fontSize: 16,
    fontWeight: 700,
    color: "#17171B99",
  },
  name: {
    fontSize: 32,
    fontWeight: 700,
    color: "#fff",
    textTransform: "capitalize",
  },
  ImgBackground: {
    width: 125,
    height: 125,
  },
});
