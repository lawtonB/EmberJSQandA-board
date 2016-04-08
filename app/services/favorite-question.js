import Ember from 'ember';

export default Ember.Service.extend({
  favoriteQuestions: [],

  add(favoriteQuestion) {
    this.get('favoriteQuestions').pushObject(favoriteQuestion);
  }
});
