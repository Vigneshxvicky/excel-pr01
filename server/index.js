const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Employee = require('./models/employee');


const app   = express();
const PORT  = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    Employee.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("password is incorrect")
            }
        }else{
            res.json("user not found")
        }
    }
    )
})

app.post('/register', (req, res) => {
    Employee.create(req.body)
    .then(employee =>{res.json(employee)})
    .catch(err =>{res.json(err)})
})


 mongoose. connect('mongodb://127.0.0.1:27017/employee')
.then(() => {
    console.log('MongoDB connected successfully');
}).catch((err) => {
    console.log('MongoDB connection failed', err);
})

app.listen(PORT, (req,res) => {
    console.log(`Server is running on port ${PORT}`);
})
