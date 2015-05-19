Template.CommentsList.events({
  'submit form#new-comment' : function (e, template) {
    e.preventDefault();

    Comments.insert({
      todoId: this._id,
      createdAt: new Date,
      userId: Meteor.userId(),
      body: template.find('textarea[name=body]').value
    });

    template.find('form#new-comment').reset();
  }
});

Template.CommentsList.helpers({
  comments: function () {
    return Comments.find({todoId: this._id}, {
      sort: {
        createdAt: -1
      }
    });
  },

  user: function () {
    return Meteor.users.findOne({_id: this.userId});
  },

  timestamp: function () {
    return moment(this.createdAt).fromNow();
  }
});

/*****************************************************************************/
/* CommentsList: Lifecycle Hooks */
/*****************************************************************************/
Template.CommentsList.created = function () {
};

Template.CommentsList.rendered = function () {
};

Template.CommentsList.destroyed = function () {
};
