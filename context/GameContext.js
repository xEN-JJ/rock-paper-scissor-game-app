import React, { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);

  const WINNING_SCORE = 5;

  const weaponImages = {
    Rock: require("../assets/images/rock.png"),
    Paper: require("../assets/images/paper.png"),
    Scissors: require("../assets/images/scissors.png"),
  };

  const updateScore = (winner) => {
    if (winner === "player") {
      setPlayerScore((prev) => prev + 1);
    } else if (winner === "computer") {
      setComputerScore((prev) => prev + 1);
    }
  };

  const resetScores = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setIsReady(false);
    setGameFinished(false);
  };

  const startNewRound = () => {
    if (playerScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) {
      setGameFinished(true);
      return;
    }

    setUserChoice(null);
    setComputerChoice(null);
    setShowCountdown(true);
  };

  const handleWeaponSelection = (weapon) => {
    setUserChoice(weapon);
  };

  const handleCountdownComplete = () => {
    setShowCountdown(false);

    if (!userChoice) {
      setComputerScore((prev) => prev + 1);
    } else {
      const computerOptions = ["Rock", "Paper", "Scissors"];
      const randomIndex = Math.floor(Math.random() * computerOptions.length);
      const computerSelection = computerOptions[randomIndex];
      setComputerChoice(computerSelection);

      if (
        (userChoice === "Rock" && computerSelection === "Scissors") ||
        (userChoice === "Paper" && computerSelection === "Rock") ||
        (userChoice === "Scissors" && computerSelection === "Paper")
      ) {
        setPlayerScore((prev) => prev + 1);
      } else if (userChoice !== computerSelection) {
        setComputerScore((prev) => prev + 1);
      }
    }

    if (
      playerScore + 1 >= WINNING_SCORE ||
      computerScore + 1 >= WINNING_SCORE
    ) {
      setGameFinished(true);
    } else {
      setTimeout(() => {
        startNewRound();
      }, 2000);
    }
  };

  return (
    <GameContext.Provider
      value={{
        playerScore,
        computerScore,
        isReady,
        showCountdown,
        userChoice,
        computerChoice,
        gameFinished,
        weaponImages,
        updateScore,
        resetScores,
        startNewRound,
        handleWeaponSelection,
        handleCountdownComplete,
        setIsReady,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
