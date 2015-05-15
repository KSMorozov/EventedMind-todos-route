/*****************************************************************************/
/* CreateTodoItem: Event Handlers */
/*****************************************************************************/
Template.CreateTodoItem.events({
  'submit form': function(e, template) {
    e.preventDefault();

    Todos.insert({
      subject: template.find('input').value,
      createdAt: new Date,
      isDone: false,
      userId: Meteor.userId()
    });

    template.find('form').reset();
  }
});

/*****************************************************************************/
/* CreateTodoItem: Helpers */
/*****************************************************************************/
Template.CreateTodoItem.helpers({

});

/*****************************************************************************/
/* CreateTodoItem: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateTodoItem.created = function () {
};

Template.CreateTodoItem.rendered = function () {
};

Template.CreateTodoItem.destroyed = function () {
};
