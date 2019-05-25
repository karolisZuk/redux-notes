import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './src/TodoApp';
import store from './src/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}


// expo init reduxstarter
// cd reduxstarter
// expo start