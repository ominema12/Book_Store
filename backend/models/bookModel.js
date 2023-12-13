import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String ,
            required: true,
        },
        author:{
            type:String,
            required:true,
        },
        PublishYear:{
            type:Number,
            requireed:true,
        },   
    },
    {
        timestamps:true,
    }
);

export const Book= mongoose.model('Cat',bookSchema);
