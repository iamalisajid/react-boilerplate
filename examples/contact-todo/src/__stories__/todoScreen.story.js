import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import Todos from '../viewes/Todos/index';

const state = {
  todos: [
    { text: 'Sample Todo', isComplete: false, id: 3 },
    { text: 'New Todo', isComplete: false, id: 2 },
    { text: 'Done Todo', isComplete: true, id: 1 },
  ],
  todoForm: '',
  loading: false,
  errors: '',
  filter: null,
};
const store = {
  getState: () => ({
    todos: state,
  }),
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

storiesOf('TodosScreen', module)
  .addDecorator((story) => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <Todos />);
