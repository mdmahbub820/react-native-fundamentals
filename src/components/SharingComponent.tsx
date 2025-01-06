import { View, Text } from "react-native";
import React, { useState } from "react";
import ComponentOne from "./ComponentOne";
import ComponenetTwo from "./ComponenetTwo";

const SharingComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponenetTwo count={count} onClickHandler={() => setCount(count + 1)} />
    </View>
  );
};

export default SharingComponent;
