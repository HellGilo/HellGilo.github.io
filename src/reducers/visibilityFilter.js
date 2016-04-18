/**
 * Created by Hellmaster on 08/04/16.
 */

export default (state = 'SHOW_ALL', action) => {
  switch (action.type){
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}