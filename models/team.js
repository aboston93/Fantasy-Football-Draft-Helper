


/* 
* Place all functions, classes, and/or DB schemas here for a single 
* model.
*/

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */


/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
let TeamSchema = mongoose.Schema({
    team: String,
    teamstats: String,
    
});




/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */const TeamCollection = mongoose.model('team', TeamSchema)


/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// function getHelloWorldString() {
//   return 'hello world'
// }
const CreateTeam = () =>
TeamCollection.create({
    team: "Patriots",
    teamstats: "fifty tds",
        
     
        
    })

function getAllTeam() {
    return TeamCollection.find()
}
function addNewTeam(newteam) {
    //make sure that the isActive is either true or false.
    //if you're using a checkbox in an HTML form then
    //if the checkbox is unselected and you submit the form
    //isActive will not be in the account object

    return TeamCollection.create(newteam);
}

function DeleteTeam(teamid) {

    return TeamCollection.deleteOne({ _id: teamid });

}


function GetTeam(teamid) {
    return TeamCollection.findById(teamid);
}

function updateTeam(teamid, updatedteam) {
    //make sure that the isActive is either true or false.
    //if you're using a checkbox in an HTML form then
    //if the chec kbox is unselected and you submit the form
    //isActive will not be in the account object


    return TeamCollection.findByIdAndUpdate(teamid, updatedteam)
}
//       const CreateAuthor = () =>
//   AuthorCollection.create({ name: "One Punch Man", created: new Date(), genre: "Harem ", StartDate: new Date(),
//   EndDate:new Date(), mainCharacter:"Saitama" , type:"shounen", creator:"mikashi" 
//       })

// function getAllAuthor() {
//     return AuthorCollection.find()
//   }

//  * TODO: export all functions from this file by adding their names as keys to this
//  * object
//  */
module.exports = {
    CreateTeam,
    getAllTeam,
    addNewTeam,
    DeleteTeam,
    GetTeam,
    updateTeam

}
