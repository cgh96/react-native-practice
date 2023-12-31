import { StyleSheet, Text, View, Button } from "react-native";

function FirstChapter() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Another piece of text!</Text>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title="Tap me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: "red",
    padding: 16,
  },
});

export default FirstChapter;
