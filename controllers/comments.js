const Comment = require("../models/Comment");

module.exports = {
  createComment: async (req, res) => {
    try {
      console.log("Request body:", req.body);
      await Comment.create({
        // commentedBy: req.body.
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
      });
      console.log("Comment has been added!");
      res.redirect("/post/" + req.params.id);// come back when you're stressing, add a comma "/post/"+req.params.id,
    } catch (err) {
      console.log(err);
    }
  },
};
