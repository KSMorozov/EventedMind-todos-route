/*****************************************************************************/
/* TodosDetail: Event Handlers */
/*****************************************************************************/
Template.TodosDetail.events({
  'submit form#edit-todo': function (e, template) {
    e.preventDefault();

    Todos.update({_id: this._id}, {
      $set: {
        subject: template.find('input[name=subject]').value,
        description: template.find('textarea[name=description]').value,
        updatedAt: new Date
      }
    });

    Router.go('todos.detail', this);
  }
});

/*****************************************************************************/
/* TodosDetail: Helpers */
/*****************************************************************************/
Template.TodosDetail.helpers({
  isMyTodo: function () {
    return this.userId === Meteor.userId();
  },

  user: function () {
    return Meteor.users.findOne({_id: this.userId});
  }
});

/*****************************************************************************/
/* TodosDetail: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosDetail.created = function () {
};

Template.TodosDetail.rendered = function () {
};

Template.TodosDetail.destroyed = function () {
};
