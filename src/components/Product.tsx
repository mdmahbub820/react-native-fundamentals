import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import React from "react";

const Product = () => {
  const price = "$200";
  const imageStyle = {
    width: 200,
    height: 200,
  };
  const carName = "Audi";
  const rating = 3.5;
  const desc = "Here is some description about the car, price and so on....";
  const button = "Add to cart";

  return (
    <View>
      <Button title={price} />
      <Image source={require("../assets/rose.jpg")} style={imageStyle} />
      <View>
        <Text>{carName}</Text>
        <Text>Rating: {rating}</Text>
      </View>
      <Text>{desc}</Text>
      <Button title={button} />
    </View>
  );
};

export default Product;
