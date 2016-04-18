/**
 * Created by Hellmaster on 08/04/16.
 */

import React from 'react';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ListManager from '../containers/ListManager'

import AddList from '../containers/AddList'

const App = () => (
  <div >
    <AddList />
    <ListManager />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)


export default App;