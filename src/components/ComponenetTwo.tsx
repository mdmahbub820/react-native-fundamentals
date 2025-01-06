import { View, Text, Button } from "react-native";
import React from "react";

interface CounterProps {
  count: number;
  onClickHandler: () => void;
}

const ComponenetTwo = ({ count, onClickHandler }: CounterProps) => {
  return (
    <View>
      <Text>ComponenetTwo</Text>
      <Text>{count}</Text>
      <Button title="Press Me" onPress={onClickHandler} />
    </View>
  );
};

export default ComponenetTwo;
