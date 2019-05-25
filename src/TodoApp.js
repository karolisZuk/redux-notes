import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class TodoApp extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Hello from todo app!</Text>
            </View>
        )
    }
}

export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60
    }
});