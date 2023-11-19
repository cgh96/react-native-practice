import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";

import StartGameScreen from "./StartGameScreen";

function Game() {
  return (
    <View style={styles.container}>
      <StartGameScreen />
      <StatusBar style="auto" />
    </View>
  );
}

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
