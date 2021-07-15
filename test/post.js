//test/posts.js
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);

// Agent that will keep track of our cookies
const agent = chai.request.agent(server);


// CODE STARTS HERE
const Post = require('../models/post');
const User = require("../models/user");


describe('Posts', function() {
  const agent = chai.request.agent(server);
  // Post for testing purposes
    const newPost = {
        book: 'Imaginary',
        fandom: 'Human',
        summary: 'Post that does not exist in the book'
    };

    const user = {
        username: 'usertest',
        password: 'passtest'
    }

    before(function (done) {
        agent
        .post('/sign-up')
        .set("content-type", "application/x-www-form-urlencoded")
        .send(user)
        .then(function(res) {
            done();
        })
        .catch(function(err) {
            done(err);
        });
    });

    it('Should create Post valid attributes at POST /post/new', function(done) {
        Post.estimatedDocumentCount()
        .then(function (initialDocCount) {
            agent
            .post("/post/new")
            //forms Post
            .set("content-type", "application/x-www-form-urlencoded")
            //make a request to create another
            .send(newPost)
            .then(function (res) {
                Post.estimatedDocumentCount()
                .then(function (newDocCount) {
                    expect(res).to.have.status(200);
                    expect(newDocCount).to.be.equal(initialDocCount + 1)
                    done();
                })
                .catch(function (err) {
                    done(err);
                });
            })
            .catch(function (err) {
                done(err);
            });
        })
        .catch(function (err) {
            done(err)
        });
    });

    // Will remove Post after test is done
    after(function (done) {
        Post.findOneAndDelete(newPost)
        .then(function (res) {
            agent.close()
      
            User.findOneAndDelete({
                username: user.username
            })
              .then(function (res) {
                  done()
              })
              .catch(function (err) {
                  done(err);
              });
        })
        .catch(function (err) {
            done(err);
        });
    });
    
});