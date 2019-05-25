import React from 'react';
import { Provider } from 'react-native';
import TodoApp from './src/TodoApp';

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <TodoApp />
      </Provider>
    );
  }
}


// expo init reduxstarter
// cd reduxstarter
// expo start