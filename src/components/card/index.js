import { View, StyleSheet, Image } from "react-native";

export const Card = ({ data, ...rest }) => {
  return (
    <View style={styles.container} {...rest}>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        }}
      />
      <Text style={styles.name}>{data.name}</Text>
      <Text>{data.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
  },
  name: {
    fontSize: 16,
  },
});
