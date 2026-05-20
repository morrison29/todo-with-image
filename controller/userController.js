import express from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../model/userModel.js';


const createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({message : "All fields are required"});
        }
        if (password.length < 6) {
            return res.status(400).json({message : "Password must be at least 6 characters"});
        }
        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            return res.status(400).json({message : "User already exists"});
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({name, email, password: hashPassword});
        res.status(201).json({message : "User created", data : newUser});
    } catch (error) {
        res.status(500).json({ message: error.message, error : error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(404).json({message : "User not found"});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({message : "Invalid password"});
        }
        res.status(200).json({message : "Login successful", data : user});
    } catch (error) {
        res.status(500).json({ message: error.message, error : error.message });
    }
}

export {createUser, loginUser}