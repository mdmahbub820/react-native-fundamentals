import { View, Text, FlatList } from "react-native";
import React from "react";

interface PasswordProps {
  isValid: boolean;
}

const ConditionalStatement = () => {
  const ValidPassword = () => <Text>Valid password</Text>;

  const InvalidPassword = () => <Text>Invalid Password</Text>;

  const Password = ({ isValid }: PasswordProps) => {
    //   if (isValid) {
    //     return <ValidPassword />;
    //   }

    //   return <InvalidPassword />;

    return isValid ? <ValidPassword /> : <InvalidPassword />;
  };

  // And operator
  //   const groceries = ["egg", "bread", "milk", "noodles"];

  return (
    <View>
      <Password isValid={false} />

      {/* And operator */}
      {/* <Text>Cart</Text>;
      {groceries.length > 0 && (
        <Text>You have {groceries.length} items in your cart</Text>
      )}
      <FlatList
        data={groceries}
        renderItem={({ item }) => <Text>{item}</Text>}
      /> */}

      {/* Ternary operator */}
    </View>
  );
};

export default ConditionalStatement;
