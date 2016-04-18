/**
 * Created by Hellmaster on 11/04/16.
 */

import todos from './todos'
import visibilityFilter from './visibilityFilter'

const list =(state, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        id: action.id,
        text: action.text,
        todos: [],
        visibilityFilter: 'SHOW_ALL'
      }
    default:
      return state
  }
}

const lists = (state = [], action) => {

  switch(action.type){
    case 'ADD_LIST':
      return [...state, list(state, action)]
    case 'SHOW_LIST':
      return state.map( (e, i ) => {if (i == action.id ) return {...e, visible:  true}; else return {...e, visible:  false} })
    case 'ADD_TODO':
      return state.map( (e, i ) => {if (i == action.list ) return {...e, todos: todos(e.todos, action)}; else return e })
    case 'TOGGLE_TODO':
      return state.map( (e, i ) => {if (i == action.list ) return {...e, todos: todos(e.todos, action)}; else return e })
    case 'SET_VISIBILITY_FILTER':
      return state.map( (e, i ) => {if (i == action.list ) return {...e, visibilityFilter:  visibilityFilter(e.todos, action)}; else return e })
    default:
      return state
  }
}

export default lists;