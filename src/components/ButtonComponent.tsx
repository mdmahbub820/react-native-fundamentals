import { View, Text, Button, TouchableOpacity, Pressable } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <View>
      <Text>Button Component</Text>
      {/* <Button title="Press Me" color="crimson" /> */}

      {/* events */}
      <Button title="Alert Us!" onPress={() => alert("You pressed me!")} />

      {/* TouchableOpacity, Pressable */}

      <TouchableOpacity onPress={() => alert("touchable opacity pressed!")}>
        <Text style={{ color: "orange" }}>Touch me</Text>
      </TouchableOpacity>

      <Pressable onPressIn={() => alert("Onpress in clicked!")}>
        <Text style={{ color: "blue" }}>Press me</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;
