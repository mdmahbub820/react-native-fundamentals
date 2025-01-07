import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomUser = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=50"
        );
        setUser(response.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.container}>
        <Image source={{ uri: item.picture.thumbnail }} style={styles.avatar} />
        <View>
          <Text style={styles.heading}>
            {item.name.first} {item.name.last}
          </Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={user}
        keyExtractor={(item) => item.login.uuid}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});

export default RandomUser;
