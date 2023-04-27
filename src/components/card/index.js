import { View, StyleSheet, Image, Text, ImageBackground } from "react-native";

import { backgroundColors } from "../../styles/colors";

import cardPokeball from "../../assets/img/Pokeball_card.png";

export const Card = ({ data }) => {
  let type = "grass";
  if (data > 3) {
    type = "fire";
  }
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: backgroundColors[type],
      }}
    >
      <View style={styles.wrapper}>
        <Text style={styles.number}>#{data.id}</Text>
        <Text style={styles.name}>{data.name}</Text>

        <View style={styles.type}>
          {data.types.map((pokemonType) => (
            <Text style={styles.bgcolor} type={type}>
              {pokemonType.type.name}
            </Text>
          ))}
        </View>
      </View>

      <ImageBackground source={cardPokeball} style={styles.imageBackground}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    height: 120,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
  },
  wrapper: {
    flexDirection: "column",
  },
  number: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    lineHeight: 31,
    textTransform: "capitalize",
    color: "#fff",
  },
  image: {
    marginTop: -40,
    width: 130,
    height: 130,
  },
  type: {
    flexDirection: "row",
    gap: 10,
  },
  bgcolor: {
    backgroundColor: "#222",
    padding: 6,
    color: "#fff",
    textTransform: "capitalize",
  },
  imageBackground: {
    width: 100,
    height: 100,
    paddingRight: 10,
  },
});
