import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export function ScoreBoard({ playerScore, computerScore }) {
  return (
    <View style={styles.container}>
      <Text style={styles.scoreLeft}>{playerScore}</Text>
      <Text style={styles.scoreRight}>{computerScore}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.secondary,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginVertical: 15,
    elevation: 5,
  },
  scoreLeft: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1B4F72",
    flex: 1,
    textAlign: "left",
    paddingRight: 10,
  },
  scoreRight: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#922B21",
    flex: 1,
    textAlign: "right",
    paddingLeft: 10,
  },
});

export default ScoreBoard;
