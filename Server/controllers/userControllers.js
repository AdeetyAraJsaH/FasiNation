import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc REGISTER a new User
// @access public
// @route POST api/users/

export const registerUser = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const user = await User.create({
        name, email, password,
    });
    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            message: 'User registered',
            user: {
                _id: user._id,
                name: user, name,
                email: user.email
            }
        });
    } else {
        res.status(400);
        throw new Error('Invalid user Data!');
    }
});

// @desc AUTH/LOGIN
// @access public
// @route POST api/users/auth

export const authUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && await user.matchPassword(password)) {
        generateToken(res, user._id);
        res.status(201).json({
            message: 'User logged in.',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                desc: user.description
            }
        });
    } else {
        res.status(401);
        throw new Error("Invalid Credentials !");
    }
});

// @desc LOGOUT user
// @access public
// @route POST api/users/logout

export const logOutUser = expressAsyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'user logged out' });
});

export const getUserProfile = expressAsyncHandler(async (req, res) => {
    const userProfile = await User.findById(req.user._id).select('-password');
    const imgBuffer = userProfile.profile ? userProfile.profile.image : null;
    const imgBase64 = imgBuffer ? imgBuffer.toString('base64') : null;
    const avatar = imgBase64 ? `data:${userProfile.profilePicture.contentType};base64,${imgBase64}` : null;
    const user = {
        _id: userProfile._id,
        name: userProfile.name,
        email: userProfile.email,
        desc: userProfile.description || null,
        avatar
    }
    res.status(200).json({ message: 'user Profile', user });
});

export const updateUserProfile = expressAsyncHandler(async (req, res) => {
    const { name, email, desc } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400);
        throw new Error('Email already taken!');
    }
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = name || user.name;
        user.desc = desc || user.desc;
        user.email = email || user.email;
        if (req.body.password) { user.password = req.body.password; }
        const updatedUser = await user.save();
        res.status(200).json({
            message: 'profile updated',
            user: {
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                desc: updatedUser.description
            }
        })
    } else {
        res.status(404);
        throw new Error('Sorry, Something went wrong.');
    }
});