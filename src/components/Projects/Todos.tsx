import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useReducer, useState } from "react";

interface Todo {
  id: string;
  text: string;
}

interface State {
  todos: Todo[];
}

interface AddTodoAction {
  type: "ADD_TODO";
  payload: string;
}

interface RemoveTodoAction {
  type: "REMOVE_TODO";
  payload: string;
}

type Action = AddTodoAction | RemoveTodoAction;

const initialState: State = { todos: [] };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          { id: Date.now().toString(), text: action.payload },
        ],
      };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const Todos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type: "ADD_TODO", payload: inputValue });
    }
    setInputValue("");
  };

  const handleRemoveTodo = (id: string) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos App</Text>
      <TextInput
        placeholder="Enter your todos"
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.input}
      />

      <Button title="Add Todo" onPress={handleAddTodo} />

      <FlatList
        data={state.todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
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
  title: {
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
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  removeBtn: {
    color: "red",
  },
});

export default Todos;
