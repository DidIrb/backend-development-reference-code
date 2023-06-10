// import the models 
import { models } from "../config/dbConn.js";

// models used in this controller
const Posts = models.posts;
const User = models.user;


// HELPER METHOD CREATE
export const createPost = (req, res) => {

  const Data = { message: req.body.message, };
  // post_id 
  if( req.body.user_id ) {
    User.findOne({ where: { user_id: req.body.user_id } }).then((data) => {
      console.log(data);
      if (data) {
        let posts = data;
        // helper methods add create in front of the model name
        posts.createPost(Data).then((data) => {
            res.status(200).send({ message: "Record generated successfully", data });
          })
          .catch((err) => {
            res.status(400).send({ error: "Something went wrong", err });
          });
      } else {
        res.status(404).send({ message: "No such User exists" });
      }
    });
  } else {
  res.status(400).send({message: "Provide the owner of the post to create!!!"})
};
};

// a utility method that we can use is countPost, removePost
// UPDATING
export const updatePost = (req, res) => {

  let user, post;
  const id = req.params.id;

  User.findOne({ where: { user_id: id } }).then((data) => {
      console.log(data);
      user = data;
      if(data) {
        Posts.findOne({ where: { post_id: req.body.post_id } }).then((data) => {
            console.log(data);
            if(data) {
              post = data;
              user.addPost(post)
              .then((data) => {
                  res.status(200).send({ message: "Updated Posts ... ", data });
                })
                .catch((err) => {
                  res.status(400).send({ error: "Something went wrong", err });
                });
            } else {
              res.status(404).send({ message: "No such User exists" });
            }
          });
      } else {
        res.status(400).send({error: "no such user exists"})
      }
    }
  );
  
  
};

// when getting details we use the find helper method to get the data.
