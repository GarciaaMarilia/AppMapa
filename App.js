import React from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaMarcador from "./src/Telas/TelaMarcador";
import TelaMapa from "./src/Telas/TelaMapa";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="TelaMapa"
          component={TelaMapa}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaMarcador"
          component={TelaMarcador}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create ({
  container:{
    flex: 1
  }
})