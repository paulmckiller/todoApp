import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const TodoListItem = (props) => {
    const { item, handleOnPress } = props;
        return(
            <TouchableOpacity onPress={() => handleOnPress(item.id)}>
                <Text style={styles.item}>{item.text}</Text>
            </TouchableOpacity>
        );
};

export default TodoListItem;

const styles = StyleSheet.create({
    item: {
        padding: 12,
        margin: 12,
        borderColor: "#470D21",
        borderWidth: 3,
        borderRadius: 10,
        borderStyle: "solid",
    }
});
