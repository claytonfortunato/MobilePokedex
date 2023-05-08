import { Text, View, StyleSheet } from "react-native";

import { boxType } from "../../styles/colors";

export function TypeElement({ data }) {
  return (
    <View
      style={{ ...styles.container, backgroundColor: boxType[data.type.name] }}
    >
      <Text style={styles.typeColor}>{data.type.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 4,
    marginRight: 4,
  },
  typeColor: {
    color: "#fff",
    textTransform: "capitalize",
    fontSize: 12,
    lineHeight: 14.32,
    margin: 4,
  },
});
