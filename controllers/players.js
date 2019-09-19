/* Step 1 import express
 *
 */
const express = require('express')


/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const playerApi = require('../models/players.js')


/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const playerRouter = express.Router()


/* Step 4
 * 
 * TODO: Put all request handlers here
 */





// playerRouter.route("/fantasylist")
//     .get((req, res) => {
//         res.send(playerApi.getAllPlayers());
// templateRouter.get('/', (req, res) => {
//     res.send(templateApi.getHelloWorldString())
//   })

//     })
playerRouter.get("/fantasylist", (req, res) => {
    playerApi.getAllPlayers().then(x =>
        res.send(x))
})

playerRouter.post("/fantasylist", (req, res) => {
    playerApi.addNewPlayer(req.body).then(x =>
        res.send(x))
})


playerRouter.delete("/:id", (req, res) => {
    playerApi.DeletePlayer(req.params.id,).then(x =>
        res.send(x))

})


playerRouter.put("/:id", (req, res) => {
    playerApi.updatePlayer(req.params.id,req.body).then(x =>
        res.send(x))

})

playerRouter.get("/:id", (req, res) => {
    playerApi.GetPlayer(req.params.id,req.body)
        .then(x => res.send(x))

    })









// shopsRouter.route('/')
//   .get((req, res) => {
//     res.send(shopsApi.getShops());

//   })

module.exports = {
    playerRouter,

}