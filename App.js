import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';
import TodoListItem from './component/TodoListItem';

export default function App() {

  const [todoList, setTodoList] = useState([
    { text: "kahve yap", id: "1" },
    { text: "react native calis", id: "2" },
    { text: "counter-strike oyna", id: "3" },
    { text: "yemek yap", id: "4", },
    { text: "kitap oku", id: "5" }
  ]);

  const pressHandler = (id) => {
    setTodoList(prevTodoList => {
      return prevTodoList.filter(listItem => listItem.id != id)
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={todoList}
              renderItem={({ item }) => (
                <TodoListItem item={item} handleOnPress={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9E4D4',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
