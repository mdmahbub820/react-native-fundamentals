import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

const weatherData = {
  London: "20 C, Clear",
  Paris: "22 C, Sunny",
  NewYork: "18 C, Cloudy",
};

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const getWeather = () => {
    setWeather(weatherData[city] || "No data found!");
  };

  return (
    <View>
      <Text>Weather App</Text>
      <TextInput
        placeholder="Enter your city"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={getWeather} />
      {weather ? <Text>{weather}</Text> : null}
    </View>
  );
};

export default Weather;
