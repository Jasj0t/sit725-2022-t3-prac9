let projectModel = require("../models/project")
// let client = require('../dbConnect')
// let projectCollection

// setTimeout(() => {
//     projectCollection = client.mongoClient.db().collection("Project")
//  }, 2000)
 
//  //Insert Project
//  const insertProjects = (project,callback) => {
//      projectCollection.insert(project,callback);
//  }
// //Get Project
//  const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
// }

//Create Project
const createProject = (req, res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
   projectModel.insertProjects(newProject,(err,result) => {
        if(err){
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message: "Project Successfully added", data: result})
        }
    })
}
//Retrieve Project
const retrieveProject = (req, res) => {
    projectModel.getProjects((err,result) => {
        if(err){
            res.json({statusCode: 400, message: err})
        }
        else{
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
}

module.exports = (retrieveProject, createProject)