import { ApiError } from "../utils/Apierror.js";
import {ApiResponse} from '../utils/Apiresponse.js'
import  AsyncHandler from '../utils/Asynchandler.js'
import {Comment} from '../models/comment.models.js'


const addComment=AsyncHandler(async(req,res)=>{
    const{blogId,content}=req.body;

    if(!blogId||!content){
        throw new ApiError(404,"blog not found");
    }

    const comment=await Comment.create({
        blog:blogId,
        author:req.user._id,
        content:content
    });
    return res.status(202)
    .json(new ApiResponse(202,"comment added",comment));

});

const getAllComment=AsyncHandler(async(req,res)=>{

   const comment= await Comment.find({blog:req.params.blogId})
   .polpulate('author','name email')
   .sort({createdAt:-1});

   return res.status(200)
   .json(new ApiResponse(200,"all comments",comment))


});

const deleteComment=AsyncHandler(async(req,res)=>{
    
   const comment = await findById (req.params.id);
   if(!comment){
    throw new ApiError(402,"comment not found");
   }

   if(comment.author.toString()!=req.user._id.toString()){
    res.status(403)
    throw new ApiError(403,"unauthorsied Access");
   }

   await comment.deleteOne();
   res.status(200)
   .json(new ApiResponse(200,"comment deleted succesfully",comment))
});

export {

    addComment,
    getAllComment,
    deleteComment


}