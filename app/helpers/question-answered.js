import Ember from 'ember';

export function questionAnswered(params) {
  var question = params[0];
  // console.log(question.get('answers').get('length'))
  if(question.get('answers').get('length') > 0) {
    return Ember.String.htmlSafe('<span class="glyphicon  glyphicon-star"></span>');
  }
}

export default Ember.Helper.helper(questionAnswered);
