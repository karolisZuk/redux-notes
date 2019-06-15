import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import AddTodo from './container/AddTodo'
import VisibleTodo from './container/VisibleTodo'
import FilterContainer from './container/FilterContainer';


class TodoApp extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <AddTodo />
                <View style={styles.view}>
                    <VisibleTodo />
                </View> 
                <View>
                <FilterContainer />
                </View>               
            </View>
        )
    }
}

export default TodoApp;

const styles=StyleSheet.create ({
    container: {
        flex: 1,
        paddingTop: 60,
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    view :{
        height: '80%'
    }
})