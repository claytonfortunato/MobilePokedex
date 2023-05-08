import React, { useEffect, useState } from "react";
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

import { backgroundColors } from "../../styles/colors";
import { boxType } from "../../styles/colors";

import { AntDesign } from "@expo/vector-icons";

import Circle from "../../assets/img/Circle.png";

import api from "../../services/api";
import { TypeElement } from "../../components/typeElement";

export function Detail() {
  const route = useRoute();
  const navigation = useNavigation();

  const { pokemonId } = route.params;

  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getPokemonsDetail() {
      try {
        const response = await api.get(`/pokemon/${route.params?.data}/`);
        const { stats, abilities, id, name, types } = response.data;

        setPokemon({ stats, abilities, id, name, types });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(true);
      }
    }
    getPokemonsDetail();
  }, [route.params?.data]);

  const handleBack = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor:
          backgroundColors[route.params?.data.types[0].type.name],
      }}
    >
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

          <View
            style={{
              ...styles.elementType,
            }}
          >
            {/* <Text style={styles.typesStyle}>
              {route.params?.data.types[0].type.name}
            </Text>
            <Text style={styles.typesStyle}>
              {route.params?.data.types[1].type.name}
            </Text> */}

            {route.params?.data.types.map((type) => (
              <TypeElement key={type.name} data={type} />
            ))}
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.headerStats}>Base Stats</Text>
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
  container: {
    backgroundColor: "#ffffff",
    height: 2100,
    borderRadius: 30,
  },
  elementType: {
    flexDirection: "row",
  },
  typesStyle: {
    backgroundColor: "#ddd",
    margin: 2,
    padding: 6,
    width: "30%",
    fontSize: 14,
    textTransform: "capitalize",
    fontWeight: "500",
  },
  headerStats: {
    fontSize: 22,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: 20,
  },
});
