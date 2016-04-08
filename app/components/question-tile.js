import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service(),

  actions: {

    update(question, params) {
      this.sendAction('update', question, params);
    },

    delete(question) {
      if (confirm('delete question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    },
    addToFavorites(favoriteQuestion) {
      this.get('favoriteQuestion').add(favoriteQuestion);
    }
  }
});
