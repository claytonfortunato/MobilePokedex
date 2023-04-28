import { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

import Circle from "../../assets/img/Circle.png";

import api from "../../services/api";

export function Detail() {
  const route = useRoute();
  const navigation = useNavigation();

  const { pokemonId } = route.params;

  const [pokemon, setPokemon] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getPokemonDetail() {
      try {
        const response = await api.get(`/pokemon/${pokemonId}/`);

        const { stats, abilities, id, name, types } = response.data;

        setPokemon(types, stats);
      } catch (err) {
        Alert.alert("Ops,ocorreu um erro, tent mais tarde!");
      } finally {
        setLoad(false);
      }
    }
    getPokemonDetail();
  }, [pokemonId]);

  const handleBack = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#8BBE8A" }}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <AntDesign name="arrowleft" size={30} color="#fff" />
        </TouchableOpacity>

        <ImageBackground source={Circle} style={styles.ImgBackground}>
          <Image
            style={styles.image}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${route.params?.data.id}.png`,
            }}
          />
        </ImageBackground>

        <View style={styles.wrapper}>
          <Text style={styles.id}>#{route.params?.data.id}</Text>
          <Text style={styles.name}>{route.params?.data.name}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 360,
    padding: 20,
    position: "relative",
  },
  image: {
    height: 130,
    width: 130,
    marginTop: -10,
  },
  wrapper: {
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
  backButton: {
    position: "absolute",
    top: 70,
    left: 40,
  },
});
