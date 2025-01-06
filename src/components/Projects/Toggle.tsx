import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const Toggle = () => {
  const [light, setLight] = useState(false);

  return (
    <View>
      <Text>{light ? "On" : "Off"}</Text>
      <Button title="Toggle" onPress={() => setLight(!light)} />
    </View>
  );
};

export default Toggle;
