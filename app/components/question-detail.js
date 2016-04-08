import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('delete answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
