import React from "react";
import { View, StyleSheet } from "react-native";

const XShape = ({ size = 50, color = "black" }) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View style={[styles.line, { backgroundColor: color }]} />
      <View style={[styles.line, styles.lineReverse, { backgroundColor: color }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  line: {
    position: "absolute",
    width: "100%",
    height: 6, // Espessura do traço do "X"
    borderRadius: 3,
    transform: [{ rotate: "45deg" }],
  },
  lineReverse: {
    transform: [{ rotate: "-45deg" }],
  },
});

export default XShape;
