import { View, Text, StyleSheet } from "react-native";
import React from "react";
import st from "../utils/style";

const StyleComponent = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          backgroundColor: "orange",
          color: "#fff",
          padding: 20,
          margin: 20,
        }}
      >
        Inline Style
      </Text>

      <Text style={styles.textStyle}>Internal styles</Text>

      <Text style={st.externalStyle}>External styles</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    backgroundColor: "black",
    color: "white",
    fontSize: 20,
    padding: 20,
    margin: 20,
  },
});

export default StyleComponent;
