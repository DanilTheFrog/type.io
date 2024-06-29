import ApiError from '@/exceptions/api-error';
import express = require('express');
import jwt from 'jsonwebtoken'

export class AuthMiddleware {

    user(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const {accessToken, refreshToken} = req.cookies
            if (!(accessToken | refreshToken)) {
                return next(ApiError.UnauthorizedError())
            }

            next();
        } catch (error) {
            return next(ApiError.UnauthorizedError())
        }
    }

    admin(req: express.Request, res: express.Response, next: express.NextFunction) {

    }
}