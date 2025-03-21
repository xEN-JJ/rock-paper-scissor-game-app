import { View, Text, Image, StyleSheet } from "react-native";

const ChoiceCard = ({ title, image }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const ChoiceCardStyles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 12,
    marginVertical: 10,
    elevation: 5,
    width: 130,
    height: 160,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default ChoiceCard;
