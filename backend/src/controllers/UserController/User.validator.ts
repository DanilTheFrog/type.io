import express = require('express');
import Joi from "joi";

const createSchema = Joi.object({
    email: Joi.string().email().min(5).max(128).required(),
    password: Joi.number().min(8).max(30).required()
})

function create(req: express.Request, res: express.Response, next: express.NextFunction) {
    const {error} = createSchema.validate(req.body);

    if (error) {
        res.status(400).json({errors: [error.details[0].message]}).end()
    }
}

export default {
    create
}