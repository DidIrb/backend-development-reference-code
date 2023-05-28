// We are going to manage requests to be made to the Comments
import { models } from "../config/dbConn.js";

const User = models.Users;
const Comment = models.comments;

//  Since one user can make many comments
export const createComment = (req, res) => {

    if (!req.body.name) {
        res.status(400).send({
          message: "Please provide The name",
        });
        return;
      }

    const comment = {
        name: req.body.name,
        text: req.body.text,
        user_Id: user_Id,
    }

  Comment.create(comment)
    .then((comment) => {
      console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while creating comment: ", err);
    });
};


