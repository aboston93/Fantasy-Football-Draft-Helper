


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
let DetailSchema = mongoose.Schema({
    pros: String,
    cons: String,
    stats: String,
 
    
});




/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */const DetailCollection = mongoose.model('detail', DetailSchema)


/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// function getHelloWorldString() {
//   return 'hello world'
// }
const CreateDetail = () =>
DetailCollection.create({
        pros: "Accurate Pocket passer on on great team",
        cons: "diffrent player when facing blitzes",
        stats: "500tds in a career",
        
     
        
    })

function getAllDetails() {
    return DetailCollection.find()
}
function addNewDetail(newdetail) {
    //make sure that the isActive is either true or false.
    //if you're using a checkbox in an HTML form then
    //if the checkbox is unselected and you submit the form
    //isActive will not be in the account object

    return DetailCollection.create(newdetail);
}

function DeleteDetail(detailid) {

    return DetailCollection.deleteOne({ _id: detailid });

}


function GetDetail(detailid) {
    return DetailCollection.findById(detailid);
}

function updateDetail(detailid, updateddetail) {
    //make sure that the isActive is either true or false.
    //if you're using a checkbox in an HTML form then
    //if the chec kbox is unselected and you submit the form
    //isActive will not be in the account object


    return DetailCollection.findByIdAndUpdate(detailid, updateddetail)
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
    CreateDetail,
    getAllDetails,
    addNewDetail,
    DeleteDetail,
    GetDetail,
    updateDetail

}
