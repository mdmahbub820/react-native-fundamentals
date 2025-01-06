import { View, Text, Button, FlatList } from "react-native";
import React, { useState } from "react";

const WithState = () => {
  //   let [count, setCount] = useState(0);

  //   const [friends, setFriends] = useState(["Shawan", "Atik", "Pranto"]);

  //   const addOne = () => {
  //     setFriends([...friends, "MR Masum"]);
  //   };

  //   const removeOne = () => {
  //     setFriends(friends.filter((f) => f !== "Atik"));
  //   };

  //   const updateOne = () => {
  //     setFriends(friends.map((f) => (f === "Shawan" ? "Shawan Hasan" : f)));
  //   };

  const [movie, setMovie] = useState({ title: "Spiderman 3", rating: 5 });

  const handleRating = () => {
    setMovie({ ...movie, rating: 9 });
  };

  return (
    <View>
      {/* <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button
        title="Decrement"
        onPress={() => (count > 0 ? setCount(count - 1) : count)}
      /> */}

      {/* update array */}
      {/* <FlatList
        data={friends}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />

      <Button title="Add Friend" onPress={addOne} />
      <Button title="Remove Friend" onPress={removeOne} />
      <Button title="Update Friend" onPress={updateOne} /> */}

      {/* update object */}
      <Text>Movie Name: {movie.title}</Text>
      <Text>Rating: {movie.rating}</Text>
      <Button title="New Ratings" onPress={handleRating} />
    </View>
  );
};

export default WithState;
