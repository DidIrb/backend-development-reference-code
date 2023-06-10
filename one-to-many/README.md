<!-- REFERENCE CODE FOR DEVELOPING OUR BACKEND USING JAVASCRIPT -->
# Many to Many relationships.
When working with relational databases we need to specify the type of relationship in this specific instance we are working with 
a Many to Many relationship 

### Tables used in this reference 
Users and Posts
A user can have many posts but an individual social media post can only belong to one user.

hasOne and belongsTo methods to define the relationship between the two tables

##### The process of creating the relationship
- define the models - {}
- import it into our dbConn.js file.
- define the relationship by writhing
    - parent.hasMany(child) - users.hasMany(post)
        - helper methods add, get, createUser is enabled
    - child.belongsTo(parent) - posts.belongsTo(Users)
        - helper methods set,get,createChild is enabled
- sequelize.sync - sync with the database
- create the controllers users and posts Controllers and creating functions to run CRUD operations when called
- create routes files to navigate to the right function.

NB: Only the essential functions were included the rest can be inferred from the information provided.
