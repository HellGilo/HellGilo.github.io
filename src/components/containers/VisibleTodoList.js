/**
 * Created by Hellmaster on 08/04/16.
 */
import { connect } from 'react-redux'
import { toggleTodo } from '../../actions'
import TodoList from '../presentationals/TodoList'

const getVisibleTodos = (list, filter) => {
  switch (list.visibilityFilter) {
    case 'SHOW_ALL':
      return list.todos || []
    case 'SHOW_COMPLETED':
      return list.todos.filter(t => t.completed) || []
    case 'SHOW_ACTIVE':
      return list.todos.filter(t => !t.completed) || []
  }
}


const getVisibleList = (list) => {
  return list.filter(t => t.visible)
}


const mapStateToProps = (state) => {
  return {
    todos: state.lists.length > 0 ? getVisibleTodos(getVisibleList(state.lists)) : []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id, 0))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList