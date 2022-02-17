import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions, View } from "react-native";

export default function Mapa() {

  const [marcadores, setMarcadores] = useState([])
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)


  //Requisição API
  useEffect(() => {
    async function getData() {
      //Token necessário para requisição
      const token = "vv7oTsHdw0X9g5e7QbniP58j3iJY4h6AoOSxMIw2X8xjokSHjF";

      //Token fazendo requisição GET
      const config = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
      //Chamada da API
      const response = await fetch('https://mobile.ect.ufrn.br:3003/markers', config)
      const marcadores = await response.json()

      setMarcadores(marcadores)
      //A API está sendo acessada normalmente, vide:
      console.log(marcadores)
    }
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <MapView styles={styles.mapa} onPress={(event) => {
        setLatitude(event.nativeEvent.coordinate.latitude)
        setLongitude(event.nativeEvent.coordinate.longitude)
      }}>
        <Marker
          coordinate={{ latitude: latitude, longitude: longitude }}
          title='TITLE'
          description='DESCRIPTON'
        />

        {
          marcadores.map((marker, id) => <Marker
            key={id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.description}
          />)
        }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapa: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});
