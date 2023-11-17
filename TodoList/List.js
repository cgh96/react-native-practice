import { View, StyleSheet, Text, FlatList } from "react-native";

function List({ todoList }) {
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
              <Text style={styles.todoColor}>{todo.item.text}</Text>
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
  },
  emptyItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "gray",
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
