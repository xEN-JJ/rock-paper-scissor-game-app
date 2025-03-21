import { StyleSheet } from "react-native";
import { TouchableOpacity, Text } from "react-native";

export function Button() {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    elevation: 3,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
