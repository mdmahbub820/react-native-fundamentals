import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useReducer, useState } from "react";

//Define the type for the state and action
interface Profile {
  id: string;
  name: string;
  age: number;
}

interface State {
  profiles: Profile[];
}

interface AddProfileAction {
  type: "ADD_PROFILE";
  payload: { name: string; age: number };
}

interface RemoveProfileAction {
  type: "REMOVE_PROFILE";
  payload: string;
}

interface UpdateProfileAction {
  type: "UPDATE_PROFILE";
  payload: { id: string; name: string; age: number };
}

type Action = AddProfileAction | RemoveProfileAction | UpdateProfileAction;

const initialState: State = { profiles: [] };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_PROFILE":
      return {
        profiles: [
          ...state.profiles,
          {
            id: Date.now().toString(),
            name: action.payload.name,
            age: action.payload.age,
          },
        ],
      };
    case "REMOVE_PROFILE":
      return {
        profiles: state.profiles.filter(
          (profile) => profile.id !== action.payload
        ),
      };
    case "UPDATE_PROFILE":
      return {
        profiles: state.profiles.map((profile) =>
          profile.id === action.payload.id
            ? { ...profile, name: action.payload.name, age: action.payload.age }
            : profile
        ),
      };
    default:
      return state;
  }
};

const Profile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAddProfile = () => {
    if (name.trim() && age.trim()) {
      dispatch({
        type: "ADD_PROFILE",
        payload: { name, age: parseInt(age, 10) },
      });
      setName("");
      setAge("");
    }
  };

  const handleUpdateProfile = (id: string) => {
    if (name.trim() && age.trim()) {
      dispatch({
        type: "UPDATE_PROFILE",
        payload: { id, name, age: parseInt(age, 10) },
      });
      setName("");
      setAge("");
      setEditingId(null);
    }
  };

  const handleRemoveProfile = (id: string) => {
    dispatch({ type: "REMOVE_PROFILE", payload: id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Profile CRUD App</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Enter your age"
        style={styles.input}
        value={age}
        onChangeText={setAge}
      />

      {editingId ? (
        <Button
          title="Update Profile"
          onPress={() => handleUpdateProfile(editingId)}
        />
      ) : (
        <Button title="Add Profile" onPress={handleAddProfile} />
      )}

      <FlatList
        data={state.profiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.profileItem}>
            <Text style={styles.profileText}>
              {item.name}, {item.age}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setName(item.name);
                setAge(item.age.toString());
                setEditingId(item.id);
              }}
            >
              <Text style={styles.editBtn}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleRemoveProfile(item.id)}>
              <Text style={styles.removeBtn}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  profileItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  profileText: {
    fontSize: 16,
    flex: 1,
  },
  editBtn: {
    color: "blue",
    marginRight: 10,
  },
  removeBtn: {
    color: "red",
  },
});

export default Profile;
