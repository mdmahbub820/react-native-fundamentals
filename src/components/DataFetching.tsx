import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Id: {item.id}</Text>
            <Text>Post Name: {item.title}</Text>
            <Text>Description: {item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DataFetching;
