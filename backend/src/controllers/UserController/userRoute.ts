import { Router } from "express";
const express = require("express");
const userRouter: Router = express.Route();
import validator from './User.validator'

userRouter.get('/', (req, res) => {

})

userRouter.post('/', validator.create, async (req, res) => {

})

export default userRouter;