import { View, StyleSheet, Text, FlatList, Pressable } from "react-native";

function List({ todoList, onDeleteItem }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={todoList}
        keyExtractor={(item, idx) => {
          return item.id;
        }}
        renderItem={(todo) => {
          return (
            <View style={styles.todoItem}>
              <Pressable
                android_ripple={{ color: "#59aacc" }}
                onPress={() => onDeleteItem(todo.item.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
              >
                <Text style={styles.todoColor}>{todo.item.text}</Text>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 8,
    flex: 4,
  },
  emptyItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "gray",
  },
  pressedItem: {
    opacity: 0.5,
  },
  todoItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  todoColor: {
    color: "white",
  },
});
