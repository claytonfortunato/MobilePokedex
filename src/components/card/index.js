import { View, StyleSheet } from "react-native";

export const Card = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>{data.name}</Text>
      <Text>{data.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
  },
});
