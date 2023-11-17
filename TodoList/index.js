import { useState } from "react";
import { View, StyleSheet, Button, TextInput, Text } from "react-native";

import Input from "./Input";
import List from "./List";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const todoInputHandler = (newTodo) => {
    setTodo(newTodo);
  };
  const addTodoHandler = () => {
    if (todo === "") {
      return;
    }
    setTodoList([...todoList, { text: todo, id: Math.random().toString() }]);
    setTodo("");
  };
  const removeAllTodoHandler = () => {
    setTodoList([]);
  };

  return (
    <View style={styles.appContainer}>
      <Input
        removeAllTodoHandler={removeAllTodoHandler}
        addTodoHandler={addTodoHandler}
        todoInputHandler={todoInputHandler}
        todo={todo}
      />
      <List todoList={todoList} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flexGrow: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
});

export default TodoList;
