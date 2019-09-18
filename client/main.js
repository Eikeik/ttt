import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Button, Container } from 'semantic-ui-react';
import React from 'react';

import { Dropdown } from './dropdown';
import TodoList from "./TodoList";
import { Article } from './Article';
import ArticleForm from './ArticleForm';
import ArticleContainer from './Article';

class App extends React.Component {
  render() {
    return (
      <Container style={{ margin: 20 }}>
        <ArticleForm />
        <TodoList />
        <ArticlesContainer />
  		</Container>
    );
  }
}

Meteor.startup(() => {
  render(
    <App />,
   document.getElementById('app'));
});