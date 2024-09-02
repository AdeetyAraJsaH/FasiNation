import express from "express"
import multer from 'multer'
import auth from "../middlewares/authMiddleware.js";
import { authUser, getUserProfile, logOutUser, registerUser, updateUserProfile } from "../controllers/userControllers.js";
const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logOutUser);
router.route('/profile')
    .get(auth, getUserProfile)
    .put(auth, updateUserProfile);

export default router
