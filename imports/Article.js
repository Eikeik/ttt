import { Mongo } from 'meteor/mongo';
// import {SimpleSchema} from 'meteor/aldeed:collection2';
import { SimpleSchema} from 'meteor/aldeed:simple-schema';

export const Articles = new Mongo.Collection("Articles");

Articles.schema = new SimpleSchema({
  ptc: {type: Boolean,optional: true},
  thematic_focus: {type: String,optional: false},
  topic: {type: String},
  topics: {
    type: Array
  },
  'topics.$': {
    type: String
  },
  location: {type: String,optional: true},
  content: {type: String},
  regref: {type: String,optional: true},
  genre: {type: String},
  keywords: {type: String,optional: true},
  event_time: {type: String,optional: true},
  topstory: {type: Boolean,optional: true},
  lifetime: {type: String},
  prio: {type: String},
  date_published: {type: String,optional: true},
  lang: {type: String,optional: true},
  title: {type: String},
  date_created: {type: String},
  author: {type: String},
  desc: {type: String},
  likes: {type: Number, defaultValue: 0},
  id: {type: String},
  text: {type: String},
  value: {type: Number,optional: true},
});