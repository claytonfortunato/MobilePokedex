import { View, StyleSheet, Image, Text } from "react-native";

export const Card = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.number}>#{data.id}</Text>
        <Text style={styles.name}>{data.name}</Text>

        <View style={styles.type}>
          {data.types.map((pokemonType) => (
            <Text>{pokemonType.type.name}</Text>
          ))}
        </View>
      </View>

      <View>
        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 80,
    backgroundColor: "#ddd",
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
    textTransform: "capitalize",
  },
});
