const mongoose=require('mongoose');
const course = new mongoose.Schema({
        title: String,
        description:String,
       date:Date,
       user:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
       }]
    })

    const newCourse = new mongoose.model("newCourse",course);
    module.exports=newCourse;