import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>ToDo App</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: "#9C0F48",
        paddingTop:38,
    },
    title: {
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    }
});
