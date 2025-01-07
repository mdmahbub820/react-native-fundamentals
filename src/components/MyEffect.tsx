import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";

const MyEffect = () => {
  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0);

  useEffect(() => {
    console.warn("useEffect called");
  }, [value]);

  return (
    <View>
      <Text>{value}</Text>
      <Text>Something: {something}</Text>
      <Button title="Increment" onPress={() => setValue(value + 1)} />
      <Button title="Increment" onPress={() => setSomething(something + 1)} />
    </View>
  );
};

export default MyEffect;
