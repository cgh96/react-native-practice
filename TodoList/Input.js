import { StyleSheet, View, TextInput, Button } from "react-native";

function Input({
  addTodoHandler,
  todoInputHandler,
  removeAllTodoHandler,
  todo,
}) {
  return (
    <View style={styles.inputOuterContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your New Todo!"
          onChangeText={todoInputHandler}
          value={todo}
        />
        <Button title="Add Todo" onPress={addTodoHandler} />
      </View>
      <View style={styles.removeBtnContainer}>
        <Button
          title="Remove All"
          onPress={removeAllTodoHandler}
          color="coral"
        />
      </View>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputOuterContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 15,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  removeBtnContainer: {
    borderRadius: 6,
    overflow: "hidden",
  },
});
