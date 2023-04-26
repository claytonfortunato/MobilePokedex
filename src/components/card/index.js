import { View, StyleSheet } from "react-native";

export const Card = ({ data, ...rest }) => {
  return (
    <View style={styles.container} {...rest}>
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
