import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoList = ({todos, toggleTodo}) => {
    return (
        <View style={styles.container}>
            {todos.map(todo => {
                return (
                    <TouchableOpacity
                        key={todo.id}
                        onPress={() => toggleTodo(todo.id)}>
                        <Text style={[styles.text, {textDecorationLine: todo.completed ? 'line-through' : 'none'}]}>
                            {todo.text}
                        </Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default TodoList;

const styles = StyleSheet.create({
    text: {
        fontSize: 24
    },
    container: {
        padding: 20
    }
});