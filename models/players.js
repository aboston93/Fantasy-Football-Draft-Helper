


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
let PlayerSchema = mongoose.Schema({
    Name: String,
    Surname:String,
    Rank: Number,
    position: String,
    Yearspro: Number,
    source:String
    
});




/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */const PlayerCollection = mongoose.model('player', PlayerSchema)


/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// function getHelloWorldString() {
//   return 'hello world'
// }
const CreatePlayer = () =>
    PlayerCollection.create({
        Name: "Ezekiell ",
        Surname: "elliot",
        Rank: 1,
        position: "Running Back",
        Yearspro: 3,
        source:""
        
    })

function getAllPlayers() {
    return PlayerCollection.find()
}
function addNewPlayer(newplayer) {
    //make sure that the isActive is either true or false.
    //if you're using a checkbox in an HTML form then
    //if the checkbox is unselected and you submit the form
    //isActive will not be in the account object

    return PlayerCollection.create(newplayer);
}

function DeletePlayer(playerid) {

    return PlayerCollection.deleteOne({ _id: playerid });

}


function GetPlayer(playerid) {
    return PlayerCollection.findById(playerid);
}

function updatePlayer(playerid, updatedPlayer) {
    //make sure that the isActive is either true or false.
    //if you're using a checkbox in an HTML form then
    //if the chec kbox is unselected and you submit the form
    //isActive will not be in the account object


    return PlayerCollection.findByIdAndUpdate(playerid, updatedPlayer)
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
    CreatePlayer,
    getAllPlayers,
    addNewPlayer,
    DeletePlayer,
    GetPlayer,
    updatePlayer

}
