const rout=require('express').Router();
require("./db/conn");
const Data= require(".db/schema");
// const rout=express.Router();

rout.post('/register',async(req, res)=>{
    try{
        const user=new Data(req.body);
        const createUser = await user.save(user);
        res.status(201).send('/login')
    }catch(e){res.status(400).send(e);}
});

rout.post('/login',async(req,res)=>{
    try{
        const user= req.body.username;
        const password= req.body.password;
        const userName=await Data.findOne({user:user});
        if(userName.password==password){
            res.send("/todo");
        }else{
            res.send("password invalid");
        }

    }catch(error){
        res.status(400).send("Invalid credential");
    }
})

rout.get('/todo',async(req,res)=>{
    try{
        const showTodo= await Data.findOne(todo);
        res.send(showTodo);

    }catch(e){res.send(e);}
})
rout.


module.exports=rout;