import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Button from "../Global/Button";
import Mapa from "../Componentes/Mapa";

export default function TelaMapa() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Mapa />
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
