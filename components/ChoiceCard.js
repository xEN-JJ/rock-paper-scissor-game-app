import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import colors from "../constants/colors";

const ChoiceCard = ({ title, image, onPress }) => {
  const scaleAnim = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.95,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
    onPress();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[styles.card, { transform: [{ scale: scaleAnim }] }]}
      >
        <Text style={styles.title}>{title}</Text>
        <Image source={image} style={styles.image} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 10,
    elevation: 5,
    width: 100,
    height: 160,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
});

export default ChoiceCard;
