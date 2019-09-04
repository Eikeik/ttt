import React from 'react';
import { Icon, Image, Card, Grid, Label, List } from 'semantic-ui-react'

import { Articles } from '../imports/Article';
import { createContainer } from 'meteor/react-meteor-data';

export class Article extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const postList = this.props.articles.map((post) =>
      <Card fluid key={post._id}>
        <Card.Content>
          <Grid columns={4} verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={1}>
                <Icon name='thumbs outline up' size='large' /> 
                {post.numLikes}
              </Grid.Column>
              <Grid.Column width={3}>
                <Card.Header>
                  {post.title}
                </Card.Header>
                <Card.Meta>
                  {post.dateCreated}
                </Card.Meta>
                <Label>Nachricht</Label>
                <Label>India</Label>
              </Grid.Column>
              <Grid.Column width={10}>
                <Card.Description>
                  {post.desc}
                </Card.Description>
              </Grid.Column>
               <Grid.Column width={2}>
                  <Image src='./flower.jpg' size='tiny' shape='circular' spaced/>
                  {post.author}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );

    return(
      <List>
        <List.Item>{postList}</List.Item>
      </List>
    );
  }
}

export default ArticlesContainer = createContainer( () => {
  Meteor.subscribe('Articles');
  return { articles: Articles.find().fetch() }
}, Article);