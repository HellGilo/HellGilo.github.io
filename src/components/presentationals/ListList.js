/**
 * Created by Hellmaster on 11/04/16.
 */

import React, { PropTypes } from 'react'
import List from './List'

const ListList = ({ lists, onTodoClick }) => (
  <ul>
    {lists.map(list =>
      <List
        key={list.id}
        {...list}
        onClick={() => onTodoClick(list.id)}
      />
    )}
  </ul>
)

ListList.propTypes = {
  // lists: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   text: PropTypes.string.isRequired,
  //   todos: PropTypes.Array.isRequired
  // }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default ListList