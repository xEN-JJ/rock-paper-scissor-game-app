import { StyleSheet } from "react-native";
import { View, Text, Button } from "react-native";
import colors from "../constants/colors";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rock, Paper, Scissors</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Start Game"
          onPress={() => navigation.navigate("Game")}
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: "80%",
  },
});

export default HomeScreen;
