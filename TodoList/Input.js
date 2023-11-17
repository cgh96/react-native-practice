import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

function Input({
  addTodoHandler,
  todoInputHandler,
  removeAllTodoHandler,
  cancelAddGoalHandler,
  todo,
  modalVisible,
}) {
  return (
    <Modal visible={modalVisible} animationType="slide">
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
        <View style={styles.utilBtnContainer}>
          <Button
            title="Remove All"
            onPress={removeAllTodoHandler}
            color="coral"
          />
          <Button
            title="Cancel"
            color="darkgray"
            onPress={cancelAddGoalHandler}
          />
        </View>
      </View>
    </Modal>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputOuterContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
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
  utilBtnContainer: {
    padding: 10,
    borderRadius: 6,
    overflow: "hidden",
    justifyContent: "space-between",
    gap: 10,
  },
});
