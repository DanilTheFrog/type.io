import { NextFunction } from "express";
import express = require("express")
import Joi from "joi";
const createModel = Joi.object({
    name: Joi.string().min(1).max(20).required(),
    text: Joi.string().min(50).max(600).required(),
    lang: Joi.string().length(2).required()
})
const updateModel = Joi.object({
    name: Joi.string().min(1).max(20),
    text: Joi.string().min(50).max(600),
    lang: Joi.string().length(2)
})

function mapJoiErrors(error: Joi.ValidationError) {
    return error.details.map(err => err.message)
}

function create(req: express.Request, res: express.Response, next: NextFunction) {
    const {error} = createModel.validate(req.body)
    if (error) {
        res.json({errors: mapJoiErrors(error)})
    }

    next();
}

function update(req: express.Request, res: express.Response, next: NextFunction) {
    const {data, id} = req.body
    const {error} = updateModel.validate(data)
    if (!id) {
        res.json({error: "Id not provided"})
        return;
    }
    if (error) {
        res.json({errors: mapJoiErrors(error)});
        return;
    }

    next();
}




export default {
    create,
    update
}