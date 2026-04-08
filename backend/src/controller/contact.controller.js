import {Contact } from '../models/contact.models.js'
import {User} from '../models/user.models.js'
import {Asynchandler} from '../utils/Asynchandler.js'
import { ApiError } from '../utils/Apierror.js'
import { ApiResponse } from '../utils/Apiresponse.js'


const  registerDetails=Asynchandler(async(req,res)=>{
    const {name,email,content}=req.body
    if(!email||!name||!content){
        throw new ApiError(400," All details are  required")
    }
    const user=await User.findOne({email});
    if(!req.user){
        throw new ApiError(401," login required");
    }
    const issue= await Contact.create({
        email,
        name,
        content,
        user: req.user?._id || null
    })
   return res.status(201)
   .json(new ApiResponse(201,issue,"Application submitted"))

 
})