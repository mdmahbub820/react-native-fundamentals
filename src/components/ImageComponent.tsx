import { View, Text, Image } from "react-native";
import React from "react";

const ImageComponent = () => {
  return (
    <View>
      <Image
        source={require("../assets/rose.jpg")}
        style={{ width: 200, height: 200 }}
      />

      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default ImageComponent;
