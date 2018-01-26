var express = require('express');
var app = express();
var mongoose = require('mongoose');

Post = require('./models/post');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/local');
var db = mongoose.connection;

console.log(db);

// Route interception for base
app.get('/', (req, res) => {
    res.send('This is the blog back end. Please use the /api routes.');
});

// Route for getting all the blog posts
app.get('/api/posts', (req, res) => {
    Post.getPosts((err, posts) => {
      if(err) {
        throw err;
      }
      // Temporary! To bypass same domain policy for AJAX from Angular App.
      res.set('Access-Control-Allow-Origin', '*');
      res.json(posts);
    });
});

app.listen(3000);
console.log('Project 4 listening on port 3000');
