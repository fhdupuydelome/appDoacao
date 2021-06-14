import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { CardProduto } from "../components/CardProduto";
import { alimentoProps } from "../libs/alimentosDB";
import api from "../services/api";

export function HomeScreen() {
  const [alimentos, setAlimentos] = useState<alimentoProps[]>([]);

  useEffect(() => {
    async function carregarDB() {
      const { data } = await api.get("produto");

      setAlimentos([...data]);
    }

    carregarDB();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={alimentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          console.log(item)
          return<CardProduto nome={item.Nome} />
        }
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
