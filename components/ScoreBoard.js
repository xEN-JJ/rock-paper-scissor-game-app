import { StyleSheet } from "react-native";

export function ScoreBoard({ score }) {
  return (
    <View style={styles.container}>
      <Text style={styles.score}>Player: {playerScore}</Text>
      <Text style={styles.score}>Computer: {computerScore}</Text>
    </View>
  );
}

const ScoreBoardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    marginVertical: 15,
    elevation: 5,
  },
  score: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
});
