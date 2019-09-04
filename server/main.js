import { Meteor } from 'meteor/meteor';
import { Articles } from '../imports/Article';

Meteor.publish('Articles', function() {
  console.log(Articles.find({}).fetch());
  return Articles.find({});
});

Meteor.startup(() => {
  // code to run on server at startup
});
