import Ember from 'ember';

export default Ember.Service.extend({
  favoriteQuestions: [],

  add(favoriteQuestion) {
    console.log(this.get('favoriteQuestions'))
    this.get('favoriteQuestions').pushObject(favoriteQuestion);
  }
});
