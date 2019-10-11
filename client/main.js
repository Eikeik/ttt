import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Button, Container } from 'semantic-ui-react';
import React from 'react';
import data from './data/data'; 
import { Dropdown } from './dropdown';
import { Article } from './Article';
import ArticleForm from './ArticleForm';
import ArticleContainer from './Article';

class App extends React.Component {
  render() {
    return (
      <Container style={{ margin: 20 }}>
        <ArticleForm data={data} />
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