import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../constants/colors";

export function Button({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
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
    fontFamily: "Poppins-Regular",
  },
});
