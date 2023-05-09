import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Card } from "../../components/card";
import api from "../../services/api";

export const Search = () => {
  const route = useRoute();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const response = await api.get(
        `/pokemon?name_like=${route.params?.name}`
      );

      setPokemons(response.data);
    }
    fetchPokemons();
  }, [route.params?.name]);

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={pokemons}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Card data={item} />}
        ListEmptyComponent={() => (
          <Text style={styles.text}>
            Não encontramos o que está buscando...
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 14,
    paddingTop: 20,
  },
  text: {
    fontSize: 18,
  },
});
