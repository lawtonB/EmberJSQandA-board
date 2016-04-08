import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:asc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    delete(answer) {
      if (confirm('delete answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
