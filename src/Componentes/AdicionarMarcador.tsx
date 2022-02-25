import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  ScrollView,
  Alert,
  TextInput
} from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function AdicionarMarcador() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mapa, setMapa] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const token = "Bearer vv7oTsHdw0X9g5e7QbniP58j3iJY4h6AoOSxMIw2X8xjokSHjF";

  useEffect(() => {
    async function getData() {
      const headerOptions = {
        method: "GET",
        headers: {
          Authorization: token
        }
      };
      const response = await fetch(
        "https://mobile.ect.ufrn.br:3003/markers",
        headerOptions
      );
      const mapa = await response.json();

      setMapa(mapa);
    }
    getData();
  }, []);

  const headerOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify({
      latitude: latitude,
      longitude: longitude,
      title: titulo,
      description: descricao
    })
  };

  function EnviarMarcador() {
    fetch("https://mobile.ect.ufrn.br:3003/markers", headerOptions)
      .then(function (response) {
        if (response.status !== 200) {
          Alert.alert("Erro " + response.status);
          return;
        }
        if (response.status === 200) {
          Alert.alert("Marcador adicionado!");
        }
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <MapView
          style={styles.mapa}
          onPress={(event) => {
            setLatitude(event.nativeEvent.coordinate.latitude);
            setLongitude(event.nativeEvent.coordinate.longitude);
          }}
        >
          <Marker
            coordinate={{ latitude: latitude, longitude: longitude }}
            title={titulo}
            description={descricao}
          />
          {mapa.map((marker, id) => (
            <Marker
              key={id}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </ScrollView>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
        />
        <TouchableOpacity onPress={() => EnviarMarcador()} style={styles.botao}>
          <Text style={styles.texto}>ADICIONAR MARCADOR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  input: {
    height: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 5,
    paddingHorizontal: 6,
    marginHorizontal: 14
  },
  botao: {
    alignItems: "center",
    padding: 18,
    borderRadius: 7,
    backgroundColor: "#000000",
    marginHorizontal: 14,
    marginBottom: 14
  },
  mapa: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  texto: {
    fontWeight: "bold",
    color: "#fff"
  }
});
