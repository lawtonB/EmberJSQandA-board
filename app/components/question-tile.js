import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    update(question, params) {
      this.sendAction('update', question, params);
    },

    delete(question) {
      if (confirm('delete question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    saveAnswer() {
      this.sendAction('saveAnswer', params);
    }
  }
});
