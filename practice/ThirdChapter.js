import { View, StyleSheet, Button, TextInput, Text } from "react-native";

function ThirdChapter() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContaier}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal!" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContaier: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    flex: 1,
    marginRight: 8,
    paddingHorizontal: 8,
  },
});

export default ThirdChapter;
