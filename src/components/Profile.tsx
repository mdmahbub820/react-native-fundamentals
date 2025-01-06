import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import st from "../utils/style";

const Profile = () => {
  const name = "MR Masum";

  return (
    <View
      style={{
        borderWidth: 2,
        padding: 30,
        alignItems: "center",
      }}
    >
      <Image
        style={styles.imgStyle}
        source={require("../assets/business man.jpg")}
      />
      <Text>{name}</Text>
      <Text>My name is MR and i love coding...</Text>
      <TouchableOpacity style={styles.btn} onPress={() => alert("this is me")}>
        <Text style={st.btnStyle}>More Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },

  btn: {
    width: 120,
    textAlign: "center",
    borderRadius: 10,
    marginTop: 10,
  },
});

export default Profile;
