import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import { GameProvider } from "./context/GameContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Rock, Paper, Scissors" }}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{ title: "Game Time!" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
}
