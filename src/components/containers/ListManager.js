/**
 * Created by Hellmaster on 11/04/16.
 */

import { connect } from 'react-redux'
import { showList } from '../../actions'
import ListList from '../presentationals/ListList'


const mapStateToProps = (state) => {
  return {
    lists : state.lists
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(showList(id, 0))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListList)

export default VisibleTodoList