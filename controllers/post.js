const Post = require('../models/post');
const User = require('../models/user');

module.exports = app => {
    // HOME
    app.get('/', (req, res) => {
      var currentUser = req.user;
      console.log('Home with current user is working')
      res.render('home', { currentUser })
    })

    // ABOUT
    app.get('/about', (req, res) => {
      var currentUser = req.user;
      res.render('about', { currentUser })
    })

    // PROFILE
    app.get('/profile', (req, res) => {
      var currentUser = req.user;
      res.render('profile', { currentUser })
    })

    // SEARCH
    app.get('/search', (req, res) => {
      var currentUser = req.user;
      res.render('search', { currentUser })
    })
    
    // POSTS PAGE
    app.get('/posts', (req, res) => {
        var currentUser = req.user;
        console.log(req.cookies);
        Post.find({}).lean()
          .populate('author')
          .then(posts => {
            res.render('post-index', { posts , currentUser});
          })
          .catch(err => {
            console.log(err.message);
          })
    })

    // GET Create POST
    app.get('/post/new', (req, res) => {
        var currentUser = req.user;
        console.log('Loading post-new')
        res.render('post-new', { currentUser });
    })

    // POST CREATE POST
    app.post("/post/new", (req, res) => {
        if(req.user){
          const post = new Post(req.body);
          post.author = req.user._id
          // SAVE INSTANCE OF POST MODEL TO DB
          post.save((err, post) => {
            return res.redirect(`/posts`);
          })
          post
          .save()
          .then((post) => {
              return User.findById(req.user._id);
          })
          .then((user) => {
              user.posts.unshift(post);
              user.save();
              res.redirect(`/post/${post._id}`);
          })
          .catch(err => {
              console.log(err.message);
          });
        }
        else {
          return res.status(401); // UNAUTHORIZED
        }
    });

    // FIND POST WITH ID
    app.get("/posts/:id", function(req, res) {
        var currentUser = req.user;
        Post.findById(req.params.id).lean()
          .then(post => {
            res.render("post-show", { post, currentUser });
          })
          .catch(err => {
            console.log(err.message);
          });
    });

    // DISPLAY POSTS WITH SAME BOOK
    app.get("/fandom/:fandom", function(req, res) {
      var currentUser = req.user;
      Post.find({ fandom: req.params.fandom }).lean()
        .then(posts => {
          res.render("post-index", { posts, currentUser });
        })
        .catch(err => {
          console.log(err.message);
        });
    });
  };