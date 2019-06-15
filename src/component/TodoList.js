import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { ALL, COMPLETED, NOT_COMPLETED } from '../action/actionTypes';

class TodoList extends React.Component {

    renderTodos(todos){
        return(
            todos.map(todo => {
                return (
                    <TouchableOpacity key={todo.id} onPress={() => this.props.toggleTodo(todo.id)}>
                        <Text style={[styles.text, 
                            {textDecorationLine: todo.completed ? 'line-through' : 'none'}]}> {todo.text} </Text>
                    </TouchableOpacity>
                );
            })
        );
    }

    filteredTodos(){
        switch(this.props.filter){
            case ALL:
                return  this.renderTodos(this.props.todos);
            case COMPLETED:   
                const completed = this.props.todos.filter(todo => todo.completed === true );
                return this.renderTodos(completed);
            case NOT_COMPLETED:   
                const notCompleted = this.props.todos.filter(todo => todo.completed === false );
                return this.renderTodos(notCompleted);
        }
    }

    render(){
        return (
            <View style={styles.container}>
                {this.filteredTodos()}
            </View>
        )
    }
}

export default TodoList;


const styles = StyleSheet.create({
    text: {
        fontSize: 24
    },
    container: {
        padding: 20
        
    }
})