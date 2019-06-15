import {ADD_TODO, TOGGLE_TODO, FILTER_COMPLETED, FILTER_NOT_COMPLETED, FILTER_ALL } from './actionTypes'

let nextId = 0;

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextId++,
    text
})


export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const filterCompleted = () => ({
    type: FILTER_COMPLETED

})

export const filterNotCompleted = () => ({
    type: FILTER_NOT_COMPLETED

})
export const filterAll = () => ({
    type: FILTER_ALL

})
