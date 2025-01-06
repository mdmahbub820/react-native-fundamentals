import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const colors = ["orange", "red", "yellow", "blue"];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#fff");

  return (
    <View style={{ backgroundColor: selectedColor }}>
      <Text style={styles.title}>Pick a color</Text>
      <View style={styles.colorsContainer}>
        {colors.map((color) => (
          <TouchableOpacity
            key={color}
            style={[styles.colorBox, { backgroundColor: color }]}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#fff",
  },
  colorsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  colorBox: {
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 30,
  },
});

export default ColorPicker;
