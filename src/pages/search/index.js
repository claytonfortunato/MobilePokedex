import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Card } from "../../components/card";
import api from "../../services/api";

export const Search = () => {
  const route = useRoute();
  const [pokemons, setPokemons] = useState([]);

  <View style={styles.container}>
    <FlatList />
  </View>;
};

const styles = StyleSheet.create({
  container: {},
});
