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
const teamApi = require('../models/team.js')


/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const teamRouter = express.Router()


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
teamRouter.get("/fantasylist", (req, res) => {
    teamApi.getAllTeam().then(x =>
        res.send(x))
})

teamRouter.post("/fantasylist", (req, res) => {
    teamApi.addNewTeam(req.body).then(x =>
        res.send(x))
})


teamRouter.delete("/:id", (req, res) => {
    teamApi.DeletePlayer(req.params.id,).then(x =>
        res.send(x))

})


teamRouter.put("/:id", (req, res) => {
    teamApi.updateTeam(req.params.id,req.body).then(x =>
        res.send(x))

})

teamRouter.get("/:id", (req, res) => {
    teamApi.GetTeam(req.params.id,req.body)
        .then(x => res.send(x))

    })









// shopsRouter.route('/')
//   .get((req, res) => {
//     res.send(shopsApi.getShops());

//   })

module.exports = {
    teamRouter

}