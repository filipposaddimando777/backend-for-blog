var mongoose = require('mongoose');

// Schema for a blog post
var postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    required: true
  }
});

var Post = mongoose.model('Post', postSchema);

// get posts
Post.getPosts = (callback, limit) => {
  Post.find(callback).limit(limit);
}

module.exports = Post;
