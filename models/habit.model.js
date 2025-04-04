import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    frequency:{
        type:String,
        enum:['Daily','Weekly'],
        required:true
    },
    completedDates:{
        type:[String],
        default:[]
    },
    createdAt: {
        type: String,
        default: () => new Date().toISOString(),
      },
},{
    timestamps : true
});

const Habit = mongoose.model.Habit || mongoose.model("Habit",habitSchema)

export default Habit;