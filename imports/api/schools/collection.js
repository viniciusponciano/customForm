import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Restfull from '/imports/api/restfull'

class SchoolCollection {
  constructor() {
    this.collection = new Mongo.Collection('schools');
  }

  getCollection() {
    return this.collection;
  }
}

export default SchoolCollection = new SchoolCollection();

if (Meteor.isServer) {
  Restfull.listener('/edit/school', ({ query: { id, ...data } }, res) => {
    return SchoolCollection.getCollection().upsert({ id }, data);
  });
}
