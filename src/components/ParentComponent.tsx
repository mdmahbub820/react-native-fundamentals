import { View, Text } from "react-native";
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <View>
      <Text>Parent Component</Text>
      <ChildComponent
        name="MR Masum"
        age={22}
        hobbies={["Singing", "Coding", "Cooking"]}
      />
    </View>
  );
};

export default ParentComponent;
