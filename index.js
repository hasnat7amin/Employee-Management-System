const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const users = require('./routes/user.js');
const employee = require('./routes/employee.js')
const path = require('path')
dotenv.config();

const app = express()
const port = process.env.PORT || 5000
const uri = process.env.MONGOOSE_URI

mongoose.connect(uri, {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(() => {
        console.log("Database is connected")
    })
    .catch((err) => {
        console.log(err)
    })

    const corsOptions ={
        origin:'http://localhost:3000', 
        credentials:true,            //access-control-allow-credentials:true
        optionSuccessStatus:200
    }
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/auth', users)
app.use('/employee', employee)

if(process.env.NODE_ENV === "production"){
    app.use( express.static("client/build/"))

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, "client", "build", 'index.html'))
    })
}

app.listen(port, () => {
    console.log("Server is listening at port 5000")
})