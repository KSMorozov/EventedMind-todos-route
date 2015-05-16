/*****************************************************************************/
/* UsersDetail: Event Handlers */
/*****************************************************************************/
Template.UsersDetail.events({
});

/*****************************************************************************/
/* UsersDetail: Helpers */
/*****************************************************************************/
Template.UsersDetail.helpers({
  todos: function () {
    return Todos.find({userId: this._id}, {sort: {createdAt: -1}});
  }
});

/*****************************************************************************/
/* UsersDetail: Lifecycle Hooks */
/*****************************************************************************/
Template.UsersDetail.created = function () {
};

Template.UsersDetail.rendered = function () {
};

Template.UsersDetail.destroyed = function () {
};
