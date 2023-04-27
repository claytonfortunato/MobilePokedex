import { View, StyleSheet, Image, Text } from "react-native";

export const Card = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        }}
      />
      <Text style={styles.name}>{data.name}</Text>
      <Text>#{data.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: "#eaeaea",
    margin: 10,
  },
  name: {
    fontSize: 16,
  },
});
