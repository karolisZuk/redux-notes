import React from 'react';
import { View,
         StyleSheet,
         TextInput,
         TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {

    state = {
        text: ''
    }

    addTodo(){
        this.props.dispatch(addTodo(this.state.text));
        this.setState({ text: '' })
    }

    render (){
        return (
            <View style={styles.container}>
                <TextInput 
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                    placeholder="Eg. Create new App"
                    style={styles.textInput}
                />
                <TouchableOpacity onPress={()=> this.addTodo()}>
                    <View style={styles.iconContainer}>
                        <Ionicons
                            name="md-add"
                            size={30}
                            style={styles.icon}
                            />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        borderColor: '#f2f2e1',
        backgroundColor: '#eaeaea',
        height: 50,
        flex: 1,
        padding: 5
    },
    iconContainer: {
        height: 50,
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon:{
        color: '#de9595',
        padding: 10
    },
    container: {
        flexDirection: 'row',
        marginHorizontal: 20
    }
});