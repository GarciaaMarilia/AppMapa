import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaMarcador from "./src/Telas/TelaMarcador";
import TelaMapa from "./src/Telas/TelaMapa";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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