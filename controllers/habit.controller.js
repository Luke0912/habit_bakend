import Habit from "../models/habit.model.js"

export const createHabit = async(req,res) => {
    const habit = req.body
    
    if(!habit.name || !habit.frequency){
        return res.status(401).send("Please Provide required Details")
    }
    const newHabit = new Habit(habit)

    try {
        await newHabit.save()
        return res.status(201).json({success:true,message:"Product created successfully",data:newHabit})
    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json("Server Error")
    }
}

export const getAllHabits = async(req,res) =>{
    try {
        const habit = await Habit.find({})
        return res.status(200).json({success:true,message:"habit Fetched Successfully",habits:habit})
    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json("Server Error")
    }
}