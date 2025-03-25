import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";
import useCustomFonts from "../constants/fonts";
import { Button } from "../components/Button"; // Use reusable button

const HomeScreen = () => {
  const navigation = useNavigation();
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/rock-paper-scissors-bg.png")}
          style={{ width: 200, height: 200 }}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.rock}>Rock</Text>
          <Text style={styles.paper}>Paper</Text>
          <Text style={styles.scissors}>Scissors</Text>
        </View>

        <Button
          title="Start Game"
          onPress={() => navigation.navigate("Game")}
        />

        <Button
          title="How to Play"
          onPress={() => console.log("How to Play Pressed")}
          style={styles.secondaryButton}
        />
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: colors.primary,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    marginBottom: 40,
  },
  rock: {
    fontSize: 28,
    color: "#3B3B3B",
    fontFamily: "Poppins-Bold",
    marginHorizontal: 8,
  },
  paper: {
    fontSize: 28,
    color: "#005F73",
    fontFamily: "Poppins-Bold",
    marginHorizontal: 8,
  },
  scissors: {
    fontSize: 28,
    color: "#9B2226",
    fontFamily: "Poppins-Bold",
    marginHorizontal: 8,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
  },
});

export default HomeScreen;
