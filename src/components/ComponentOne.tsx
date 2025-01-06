import { View, Text, Button } from "react-native";
import React from "react";

interface CounterProps {
  count: number;
  onClickHandler: () => void;
}

const ComponentOne = ({ count, onClickHandler }: CounterProps) => {
  return (
    <View>
      <Text>Component One</Text>
      <Text>{count}</Text>
      <Button title="Press Me" onPress={onClickHandler} />
    </View>
  );
};

export default ComponentOne;
