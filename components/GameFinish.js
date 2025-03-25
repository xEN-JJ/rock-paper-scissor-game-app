import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const GameFinish = ({
  isVisible,
  isWinner,
  playerScore,
  computerScore,
  onPlayAgain,
  onReturnHome,
}) => {
  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>
            {isWinner ? "🎉 Congratulations!" : "😢 You Lost!"}
          </Text>

          <Text style={styles.scoreText}>
            Final Score: You {playerScore} - {computerScore} Computer
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.playAgainButton}
              onPress={onPlayAgain}
            >
              <Text style={styles.buttonText}>Play Again?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.homeButton} onPress={onReturnHome}>
              <Text style={styles.buttonText}>Return Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContainer: {
    width: "85%",
    padding: 30,
    backgroundColor: "#FFF",
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 15,
  },
  scoreText: {
    fontSize: 20,
    color: "#333",
    marginBottom: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  playAgainButton: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 10,
    alignItems: "center",
  },
  homeButton: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default GameFinish;