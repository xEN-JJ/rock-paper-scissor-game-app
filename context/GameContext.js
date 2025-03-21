import React, { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

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
  };

  return (
    <GameContext.Provider
      value={{
        playerScore,
        computerScore,
        updateScore,
        resetScores,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
