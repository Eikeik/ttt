import React from 'react';
import { Icon, Image, Card, Grid, Label, List, Button } from 'semantic-ui-react'

import { Articles } from '../imports/Article';
import { createContainer } from 'meteor/react-meteor-data';

export class Article extends React.Component {

    handleDelete = () => {
        alert("rgendwie per _id von der List nehmen. Todo für die Woche");
    };


    handleIncrement = e => {
        this.setState({ likes: this.state.likes + 1 });
    };



    constructor(props) {
        super(props);
        
  }

    render() {
      const postList = this.props.articles.map((post) =>
        <Card fluid key={post._id} id={post._id}>
        <Card.Content>
          <Grid columns={5} verticalAlign='middle'>
            <Grid.Row>
           
              <Grid.Column width={1}>             
            </Grid.Column>
              <Grid.Column width={3}>
                <Card.Header>
                  Titel: {post.title}
                </Card.Header>
                <Card.Meta>
                  Created on: {post.dateCreated}
                </Card.Meta>
                  <Card.Meta>
                  post.genre= {post.genre} 
                </Card.Meta>        
              </Grid.Column>
              <Grid.Column width={8}>
                <Card.Description>
                  Description: {post.desc}
                </Card.Description>
                <Card.Meta>
                  Location: 
               </Card.Meta>
                </Grid.Column>
              <Grid.Column width={2}>
                  
                  Author: {post.author}
              </Grid.Column>
              <Grid.Column width={2}>
              <Button onClick={() => this.handleDelete(post._id)}>
              Delete
              </Button>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
        );

        return (
            <List>
              <List.Item>{postList}</List.Item>
            </List>
        );
    }




}

export default ArticlesContainer = createContainer(() => {
    Meteor.subscribe('Articles');
    return { articles: Articles.find().fetch() }
}, Article);








