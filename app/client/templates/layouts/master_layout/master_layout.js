Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
  'click [data-logout]': function(e, template) {
    Meteor.logout();
  },

  'click [data-login]': function(e, template) {
    Meteor.loginWithMeteorDeveloperAccount();
  }
});
