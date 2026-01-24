import {Router} from 'express'
import { verifyAccessToken } from "../middlewares/auth.middleware.js";

import {
    addComment,
    getAllComment,
    deleteComment
} from '../controller/comment.controller.js'

const router=Router();

router.route('/add').post(verifyAccessToken, addComment);
router.route('/all').get(verifyAccessToken, getAllComment);
router.route('/delete/:id').delete(verifyAccessToken, deleteComment);

export default router;