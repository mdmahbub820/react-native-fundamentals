import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

interface ProductProps {
  name: string;
  image: string;
  rating: number;
  price: number;
}

const Products = ({ name, image, rating, price }: ProductProps) => {
  return (
    <View style={styles.productContainer}>
      <View>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View>
        <Text>{name}</Text>
        <Text>Price: {price}</Text>
        <Text>Rating: {rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10,
  },
});

export default Products;
