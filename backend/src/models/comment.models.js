import mongoose from 'mongoose'
import {Blog} from './blog.models.js'
import {User} from './user.models.js'
const commentSchema=mongoose.Schema({
    Blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Blog'
    },
    
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    content: {
        type: String,
        required: true
  }
},{timestamps:true})
export const Comment=mongoose.model('Comment',commentSchema);