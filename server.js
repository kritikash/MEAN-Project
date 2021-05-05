const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const StudentRoute = require('./routes/student')







//db
const mongoURI = 'mongodb+srv://dbUser:12345@cluster0.db3ui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true},
    (req,res)=>{
        console.log('CONNECTED TO DATABASE..')
        console.log(req,res)
    
    });

//endpoint

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.port || 3000

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}')
})

app.use('/api/student', StudentRoute)

app.get('*', function(req, res){
    res.render('index.html');
});











