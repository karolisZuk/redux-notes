import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { filterCompleted, filterNotCompleted, filterAll } from '../action';
import {NOT_COMPLETED,COMPLETED,ALL} from '../action/actionTypes'

class BottomBar extends React.Component {

    filterCompleted(){
        this.props.dispatch({type: COMPLETED})
    }

    filterNotCompleted(){
        this.props.dispatch({type: NOT_COMPLETED})
    }
    filterAll(){
        this.props.dispatch({type: ALL})
    }

    
    render(){
    return (
        <View style={styles.bottom}>
        <TouchableOpacity onPress={() => this.filterCompleted()}>
             <View style={styles.container}>
                <Ionicons 
                    name="ios-radio-button-on" 
                    size={30} 
                    />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.filterNotCompleted()}>
            <View style={styles.container}>
                <Ionicons
                    name="ios-refresh" 
                    size={30} 
                    />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.filterAll()}>
            <View style={styles.container}>
                <Ionicons 
                    name="ios-radio-button-off" 
                    size={30} 
                    />
            </View>
        </TouchableOpacity>
        </View>
    )

}
}

export default BottomBar;


const styles=StyleSheet.create({
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'gold',
        padding: 20,
        borderWidth: 1,    

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        
    }

})