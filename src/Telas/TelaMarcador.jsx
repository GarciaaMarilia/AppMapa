import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import AdicionarMarcador from "../Componentes/AdicionarMarcador";

export default function TelaMarcador() {
  return (
    <View style={styles.container}>
      <AdicionarMarcador />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
