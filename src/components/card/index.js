import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { backgroundColors } from "../../styles/colors";
import { boxType } from "../../styles/colors";

import cardPokeball from "../../assets/img/Pokeball_card.png";
import dots from "../../assets/img/dots.png";

export const Card = ({ data }) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("Detail", { data: data });
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: backgroundColors[data.types[0].type.name],
      }}
      onPress={handleNavigate}
    >
      <View style={styles.wrapper}>
        <Image source={dots} style={styles.imageCard} />
        <Text style={styles.number}>#{data.id}</Text>
        <Text style={styles.name}>{data.name}</Text>

        <View
          style={{
            ...styles.boxType,
          }}
        >
          {data.types.map((type) => (
            <View
              style={{
                ...styles.bgcolor,
                backgroundColor: boxType[type.type.name],
              }}
              key={type.name}
              type={type.name}
            >
              <Text style={styles.typeText}>{type.type.name}</Text>
            </View>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    height: 140,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
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
    fontSize: 26,
    fontWeight: 700,
    lineHeight: 31,
    textTransform: "capitalize",
    color: "#fff",
  },
  image: {
    marginTop: -40,
    width: 130,
    height: 130,
  },
  boxType: {
    flexDirection: "row",
    gap: 10,
    marginTop: 6,
  },
  bgcolor: {
    backgroundColor: "#222",
    padding: 5,
    borderRadius: 4,
  },
  imageBackground: {
    width: 100,
    height: 100,
    paddingLeft: "4%",
  },
  imageCard: {
    position: "absolute",
    width: 74,
    height: 32,
    left: 70,
    top: -12,
  },
  typeText: {
    color: "#fff",
    textTransform: "capitalize",
    fontSize: 12,
    lineHeight: 14.32,
  },
});
