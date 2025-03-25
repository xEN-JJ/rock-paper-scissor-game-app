import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ChoiceCard from "./ChoiceCard";
import colors from "../constants/colors";

const Countdown = ({ onCountdownComplete, onSelectWeapon }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ["Rock", "Paper", "Scissors"];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < words.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
        onCountdownComplete();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{words[currentIndex]}</Text>

      <View style={styles.cardsContainer}>
        <ChoiceCard
          title="Rock"
          image={require("../assets/images/rock.png")}
          onPress={() => onSelectWeapon("Rock")}
        />
        <ChoiceCard
          title="Paper"
          image={require("../assets/images/paper.png")}
          onPress={() => onSelectWeapon("Paper")}
        />
        <ChoiceCard
          title="Scissors"
          image={require("../assets/images/scissors.png")}
          onPress={() => onSelectWeapon("Scissors")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 60,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default Countdown;
