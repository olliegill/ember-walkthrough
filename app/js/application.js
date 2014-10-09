window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://amber-inferno-7725.firebaseio.com/")
});
