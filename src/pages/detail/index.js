import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { backgroundColors } from "../../styles/colors";
import { boxType } from "../../styles/colors";

import { AntDesign } from "@expo/vector-icons";

import Circle from "../../assets/img/Circle.png";

import { TypeElement } from "../../components/typeElement";

import * as Progress from "react-native-progress";

export function Detail() {
  const route = useRoute();
  const navigation = useNavigation();

  const currentType = route.params?.data.types[0].type.name;

  const color = boxType[currentType];

  const handleBack = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: backgroundColors[currentType],
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
            {route.params?.data.types.map((type) => (
              <TypeElement key={type.name} data={type} />
            ))}
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <Text
          style={{
            ...styles.headerStats,
            color: boxType[currentType],
          }}
        >
          Base Stats
        </Text>

        <View style={styles.contentStats}>
          {route.params?.data.stats.map((attribute) => (
            <View key={attribute.stat.name} style={styles.statusBox}>
              <Text style={styles.attribute}>{attribute.stat.name}</Text>
              <Text style={styles.attributeNumber}>{attribute.base_stat}</Text>
              <View style={styles.contentBar}>
                <Progress.Bar
                  progress={100}
                  borderWidth={1}
                  width={attribute.base_stat}
                  color={color}
                />
              </View>
            </View>
          ))}
        </View>

        <View style={styles.contentAbilit}>
          <Text style={{ ...styles.headerStats, color: boxType[currentType] }}>
            Abilities
          </Text>

          {route.params?.data.abilities.map((abilityInfo) => (
            <Text style={styles.text}>{abilityInfo.ability.name}</Text>
          ))}
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
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    height: 800,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    padding: 20,
    alignItems: "center",
  },
  elementType: {
    flexDirection: "row",
    marginTop: 8,
  },
  headerStats: {
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 19,
    padding: 20,
  },
  statusBox: {
    width: "100%",
    margin: 10,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  attribute: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 14,
    width: 120,
    height: 30,
    textTransform: "capitalize",
    color: "#222",
  },
  attributeNumber: {
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 19,
    color: "#aaa",
    marginLeft: 20,
  },
  contentBar: {
    marginLeft: 20,
  },
  text: {
    fontSize: 22,
    lineHeight: 19,
    textTransform: "capitalize",
    padding: 14,
  },
  contentAbilit: {
    marginTop: 20,
  },
});
