import mongoose from 'mongoose'
import { User} from '../models/user.models.js'
const contactSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null,
    },
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    content:{
        type:String,
        required:[true,"issue required "],
    },
    status:{
        type:String,
        enum:["pending","solved"],
        default:"pending"
    }
},{timestamps:true})

export const Contact=mongoose.model("Contact",contactSchema);