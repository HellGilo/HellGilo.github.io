/**
 * Created by Hellmaster on 11/04/16.
 */

import React from 'react'
import { connect } from 'react-redux'
import { addList, showList } from '../../actions'

let AddList = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addList(input.value))
        dispatch(showList(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add List
        </button>
      </form>
    </div>
  )
}
AddList = connect()(AddList)

export default AddList