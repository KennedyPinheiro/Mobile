import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = ({ children, style, text }) => {
    return (
        <View style={[styles.card, style]}>
            {text && <Text>{text}</Text>}
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#457de4b7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
});

export default Card;