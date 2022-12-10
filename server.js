var express = require("express")
var app = express()
var cors = require('cors')

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
let projectCollection

//MongoDB connection
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://Jasjot:1234@cluster0.wo82l5i.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})
//Project Collection
const createCollection = (collectionName) => {
    client.connect((err,db) => {
        projectCollection = client.db().collection(collectionName);
        if(!err){
            console.log('MongoDB Conencted')
        }
        else {
            console.log("DB Error: ",err);
            process.exit(1);
        }
    })
}

//insert project
const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}
//post api
app.post('/api/projects',(req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    insertProjects(newProject,(err,result) => {
        if(err){
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message: "Project Successfully added", data: result})
        }
    })
})

// const cardList = [
//         {
//             title: "Meta 2",
//             image: "images/index1.jpg",
//             link: "About Meta 2",
//             desciption: "Demo desciption about meta 2"
//         },
//         {
//             title: "Meta 3",
//             image: "images/index.jpg",
//             link: "About Meta 3",
//             desciption: "Demo desciption about meta 3"
//         }
//     ]
//get project
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

// get api
app.get('/api/projects',(req,res) => {
    getProjects((err,result) => {
        if(err){
            res.json({statusCode: 400, message: err})
        }
        else{
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
})

var port = process.env.port || 1337;
app.listen(port,()=>{
    console.log("App listening to: http://localhost:"+port)
    createCollection("Meta")
})