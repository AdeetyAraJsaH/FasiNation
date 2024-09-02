import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const auth = expressAsyncHandler(async (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userID).select('-password');
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized , invalid Token !');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token found !');
    }
})

export default auth