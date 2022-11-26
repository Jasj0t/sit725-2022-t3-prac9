var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extends: false}));
//Addition
const addition = (A1, A2) => {
    var num1 = parseInt(A1)
    var num2 = parseInt(A2)
    var result = num1 + num2
    return result
}
app.get("/Addition", (req, res) =>{
    var A1 = req.query.A1
    var A2 = req.query.A2
    var result = addition(A1, A2)
    res.json({statusCode: 200, data: result, message: 'Success'})
})
//Subsraction
const Sub = (S1, S2) => {
    var num1 = parseInt(S1)
    var num2 = parseInt(S2)
    var result = num1 - num2
    return result
}
app.get("/Subtract", (req, res) =>{
    var S1 = req.query.S1
    var S2 = req.query.S2
    var result = Sub(S1, S2)
    res.json({statusCode: 200, data: result, message: 'Success'})
})
//Division
const Div = (D1, D2) => {
    var num1 = parseFloat(D1)
    var num2 = parseFloat(D2)
    var result = num1 / num2
    return result
}
app.get("/Divide", (req, res) =>{
    var D1 = req.query.D1
    var D2 = req.query.D2
    var result = Div(D1, D2)
    res.json({statusCode: 200, data: result, message: 'Success'})
})
//Multiplication
const Mul = (M1, M2) => {
    var num1 = parseInt(M1)
    var num2 = parseInt(M2)
    var result = num1 * num2
    return result
}
app.get("/Multiply", (req, res) =>{
    var M1 = req.query.M1
    var M2 = req.query.M2
    var result = Mul(M1, M2)
    res.json({statusCode: 200, data: result, message: 'Success'})
})

var port = process.env.port || 1337;

app.listen(port,()=>{
    console.log("App listening to: http://localhost:"+port)
})