import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Button } from 'semantic-ui-react';
import React from 'react';

import { Article } from './Article';
import ArticleForm from './ArticleForm';
import ArticleContainer from './Article';

class App extends React.Component {
  render() {
    return (
      <div>
        <ArticleForm />
        <ArticlesContainer />
      </div>
    );
  }
}

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});