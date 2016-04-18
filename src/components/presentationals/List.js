/**
 * Created by Hellmaster on 11/04/16.
 */

import React, { PropTypes } from 'react'

const List = ({ onClick, text }) => (
  <li
    onClick={onClick}
  >
    {text}
  </li>
)

List.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default List