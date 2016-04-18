/**
 * Created by Hellmaster on 08/04/16.
 */

let nextTodoId = 0;
let nextListId = 0;

export const addList = (text) => {
  return {
    type : 'ADD_LIST',
    id:  nextListId++,
    todos: [],
    text
  }
}

export const showList = (id) => {
  return {
    type: 'SHOW_LIST',
    id
  }
}

export const addTodo = (text, list) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    list,
    text
  }
}

export const setVisibilityFilter = (filter, list) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    list,
    filter
  }
}

export const toggleTodo = (id, list) => {
  return {
    type: 'TOGGLE_TODO',
    list,
    id
  }
}