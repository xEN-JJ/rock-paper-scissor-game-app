import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { BlurView } from "expo-blur";
import { useGame } from "../context/GameContext";
import ScoreBoard from "../components/ScoreBoard";
import Countdown from "../components/Countdown";
import GameFinish from "../components/GameFinish";
import colors from "../constants/colors";

const GameScreen = ({ navigation }) => {
  const {
    playerScore,
    computerScore,
    isReady,
    showCountdown,
    userChoice,
    computerChoice,
    gameFinished,
    weaponImages,
    startNewRound,
    handleWeaponSelection,
    handleCountdownComplete,
    resetScores,
    setIsReady,
  } = useGame();

  const handleReady = () => {
    setIsReady(true);
    startNewRound();
  };

  const handlePlayAgain = () => {
    resetScores();
  };

  const handleReturnHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <GameFinish
        isVisible={gameFinished}
        isWinner={playerScore >= 5}
        playerScore={playerScore}
        computerScore={computerScore}
        onPlayAgain={handlePlayAgain}
        onReturnHome={handleReturnHome}
      />

      {!isReady && (
        <BlurView intensity={30} tint="dark" style={styles.blurryOverlay}>
          <TouchableOpacity style={styles.readyButton} onPress={handleReady}>
            <Text style={styles.readyText}>Ready?</Text>
          </TouchableOpacity>
        </BlurView>
      )}

      {isReady && showCountdown && (
        <BlurView intensity={30} tint="dark" style={styles.blurryOverlay}>
          <Countdown
            onCountdownComplete={handleCountdownComplete}
            onSelectWeapon={handleWeaponSelection}
          />
        </BlurView>
      )}

      {isReady && !showCountdown && !gameFinished && (
        <>
          <ScoreBoard playerScore={playerScore} computerScore={computerScore} />

          <View style={styles.ringContainer}>
            <View style={styles.computerArea}>
              {computerChoice ? (
                <Image
                  source={weaponImages[computerChoice]}
                  style={styles.weapon}
                />
              ) : (
                <Text style={styles.computerText}>COMPUTER</Text>
              )}
            </View>

            <View style={styles.userArea}>
              {userChoice ? (
                <Image
                  source={weaponImages[userChoice]}
                  style={styles.weapon}
                />
              ) : (
                <Text style={styles.userText}>USER</Text>
              )}
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  blurryOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  readyButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 5,
  },
  readyText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
  },
  ringContainer: {
    width: "90%",
    height: 550,
    borderWidth: 4,
    borderColor: colors.primary,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "#FFF",
    marginVertical: 20,
  },
  computerArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FADBD8",
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  computerText: {
    fontSize: 26,
    color: "#922B21",
    fontWeight: "bold",
  },
  userArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F6EF",
  },
  userText: {
    fontSize: 26,
    color: "#1B4F72",
    fontWeight: "bold",
  },
  weapon: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});

export default GameScreen;
