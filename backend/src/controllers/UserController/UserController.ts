import express = require('express');
import prisma from '@base/prisma/client'
import bc from 'bcrypt'

export class UserController {
    async registration(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const {email, password} = req.body;
            if (typeof email !== 'string') throw new Error("Bad request");
            const candidate = await prisma.user.findUnique({where: {email}});
            if (candidate) {
                res.status(400).json({errors: ["User already exists"]}).end();
                return;
            }
            const passwordHash = await bc.hash(password, 5)
            const user = await prisma.user.create({
                data: {
                    email,
                    passwordHash,
                    data: ""
                }
            })

            if (!user) {
                res.status(500).json({errors: ["Can not create user"]}).end();
                throw new Error("Db error")
            }

            return user
        } catch (e: unknown) {
            console.log(e);
            res.status(500).end();
        } finally {
            res.end();
        }        
    }

    async update(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {

        } catch (e: unknown) {
            console.log(e);
        } finally {
            res.end();
        }
    }

    async delete(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {

        } catch (e: unknown) {
            console.log(e);
        } finally {
            res.end();
        }        
    }

    async get(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {

        } catch (e: unknown) {
            console.log(e);
        } finally {
            res.end();
        }
    }
}