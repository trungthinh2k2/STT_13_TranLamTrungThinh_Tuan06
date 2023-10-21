import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Screen4_a from "./screens/Screen4_a";
import Screen4_b from "./screens/Screen4_b";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true }}/>
        <Stack.Screen name="Screen4_a" component={Screen4_a} />
        <Stack.Screen name="Screen4_b" component={Screen4_b} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
