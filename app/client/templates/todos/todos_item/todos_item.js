/*****************************************************************************/
/* TodosItem: Event Handlers */
/*****************************************************************************/
Template.TodosItem.events({
  'click [name=isDone]': function(e, template) {
    Todos.update({_id: this._id}, {
      $set: {
        isDone: template.find('input').checked
      }
    });
  }
});

/*****************************************************************************/
/* TodosItem: Helpers */
/*****************************************************************************/
Template.TodosItem.helpers({
  isDoneChecked: function() {
    return this.isDone ? 'checked' : '';
  }
});

/*****************************************************************************/
/* TodosItem: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosItem.created = function () {
};

Template.TodosItem.rendered = function () {
};

Template.TodosItem.destroyed = function () {
};
