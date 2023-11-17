import { useState } from "react";
import { View, StyleSheet, Button, TextInput, Text } from "react-native";

import Input from "./Input";
import List from "./List";

function TodoList() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const cancelAddGoalHandler = () => {
    setModalIsVisible(false);
  };

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
  const removeTodoHandler = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <Input
        cancelAddGoalHandler={cancelAddGoalHandler}
        modalVisible={modalIsVisible}
        removeAllTodoHandler={removeAllTodoHandler}
        addTodoHandler={addTodoHandler}
        todoInputHandler={todoInputHandler}
        todo={todo}
      />
      <List todoList={todoList} onDeleteItem={removeTodoHandler} />
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
