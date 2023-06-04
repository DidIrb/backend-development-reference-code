<!-- REFERENCE CODE FOR DEVELOPING OUR BACKEND USING JAVASCRIPT -->
# One to One relationships.
When working with relational databases we need to specify the type of relationship in this specific instance we are working with 
a one to one relationship 

### Tables used in this reference 
Persons and Birth Certificates
a person can only have one birth certificate and an individual birth Certificate can only belong to one person
we are using the 

hasOne and belongsTo methods to define the relationship between the two tables

##### The process of creating the relationship
- define the models {Person, BirthCert}
- import it into our dbConn.js file.
- define the relationship by writhing
    - parent.hasOne(child) - person.hasOne(birthCert)
        - helper methods set,get,createParent is enabled
    - child.belongsTo(parent) - birthCert.belongsTo(person)
        - helper methods set,get,createChild is enabled
- sequelize.sync - sync with the database
- create the controllers birthCert Controller and Person Controller and create functions to run CRUD operations when called
- add a routes file person.routes and birthCert.routes and export them.
- during testing once the endpoint is hit the function defined in the routes file will run.


NB: This is mostly based on my level of understanding and is not professionally as such there are some functions that were not defined in this reference section.
