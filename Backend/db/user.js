const mongoose=require('mongoose');
const registerData = new mongoose.Schema({
        name: String,
        email:String,
       contact:Number,
       course:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "course"
       }]
    })

    const Sample = new mongoose.model("Sample",registerData);
    module.exports=Sample;