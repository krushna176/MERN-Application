const express = require('express');
require("./db/conn");
const Data= require("./db/user");
const Course=require('./db/course')

const app = express();
const port=8000;

app.use(express.json());

let date_ob=new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
var currentDate=year + "-" + month + "-" + date;

app.post('/register',async(req, res)=>{
    try{
        const user=new Data(req.body);
        const createUser = await user.save(user);
        res.status(201).send('seccesfully registered')
    }catch(e){res.status(400).send(e);}
});

app.get('/user',async(req,res)=>{
    try{
       const showUsre= await Data.find({});
       res.send(showUsre)
    }catch(err){
        res.status(400).send(err);
    }
})

app.post('/course',async(req, res)=>{
    try{
        const course=new Course(req.body);
        const newCourse =await course.save(course);
        res.status(201).send('seccesfully registered')
    }catch(e){res.status(400).send(e);}
});

app.get('/showCourse',async(req,res)=>{
    try{
       const showCourse= await Course.find();
       res.send(showCourse);
    }catch(err){
        res.status(400).send(err);
    }
})

app.post('/', async (req, res)=> {

    try{
        const user =new Data(req.body) ;
        const newUser = await Data.create(user);
        
        const courseDate=[await Course.findById({_id:user.course})];
        console.log(courseDate.length);
        for(var i=0;i<=courseDate.length;i++){
            if(currentDate<courseDate){
                res.send("sorry deadline is over");
            }else{
                await Course.updateMany({ '_id': newUser.course }, { $push: { user: newUser._id } });
                return res.send("Success");
            }
        }
        
        
    }catch(e){
        res.send(e);
    }
   
  });

app.get('/userCourse',async(req,res)=>{
      try{
          const showCourse=await Data.findById({_id:"62504088ead6002831b56c9c"}).
          populate({path:'course',model:'newCourse'});
          console.log(showCourse);
          res.send(showCourse);
      }catch(err){
          res.send(err);
      }
  })
app.get('/courseUser',async(req,res)=>{
    try{
        const showUser=await Course.findById({_id:"62503c1fd6315134116d8845"}).
        populate({path:'user',model:'Sample'});
        console.log(showUser);
        res.send(showUser.user);
    }catch(err){
        res.send(err);
    }
})

app.listen(port,(e)=>{
    if(e){
        console.log(e)
    }
    else console.log("connection success on"+port);
})
