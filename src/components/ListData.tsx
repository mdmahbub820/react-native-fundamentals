import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";

interface Product {
  image: string;
  name: string;
  rating: number;
  price: number;
}

const ListData = () => {
  //   const fruits = ["apple", "orange", "banana", "kiwi"];
  const products = [
    {
      id: 1,
      name: "Classic Cheeseburger",
      image: "https://picsum.photos/200",
      rating: 4.5,
      price: 250,
    },
    {
      id: 2,
      name: "Margherita Pizza",
      image: "https://picsum.photos/200",
      rating: 4.7,
      price: 450,
    },
    {
      id: 3,
      name: "Chicken Caesar Salad",
      image: "https://picsum.photos/200",
      rating: 4.3,
      price: 320,
    },
    {
      id: 4,
      name: "Grilled Chicken Sandwich",
      image: "https://picsum.photos/200",
      rating: 4.6,
      price: 280,
    },
    {
      id: 5,
      name: "Spaghetti Carbonara",
      image: "https://picsum.photos/200",
      rating: 4.8,
      price: 400,
    },
    {
      id: 6,
      name: "Vegetable Samosa",
      image: "https://picsum.photos/200",
      rating: 4.4,
      price: 120,
    },
    {
      id: 7,
      name: "Butter Chicken Curry",
      image: "https://picsum.photos/200",
      rating: 4.9,
      price: 550,
    },
    {
      id: 8,
      name: "Chocolate Lava Cake",
      image: "https://picsum.photos/200",
      rating: 4.8,
      price: 300,
    },
    {
      id: 9,
      name: "Mango Smoothie",
      image: "https://picsum.photos/200",
      rating: 4.6,
      price: 180,
    },
    {
      id: 10,
      name: "Tandoori Paneer Wrap",
      image: "https://picsum.photos/200",
      rating: 4.5,
      price: 350,
    },
  ];

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <View style={styles.productContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.heading}>{item.name}</Text>
        <Text>Price: ${item.price}</Text>
        <Text>Rating: {item.rating}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default ListData;
