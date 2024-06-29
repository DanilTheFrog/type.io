import ApiError from "@/exceptions/api-error";
import { Logger } from "@/types/Logger";
import express from "express";


class ErrorHandler {
    private logger: Logger

    constructor(logger: Logger) {
        this.logger = logger
    }
    
    public md(err: express.Errback, req: express.Request, res: express.Response, next: express.NextFunction) {
        this.logger.log(err);
        if (err instanceof ApiError) {
            return res.status(err.status).json({message: err.message, errors: err.errors})
        }

        return res.status(500).json({message: "Server Error"})
    }
}

export default ErrorHandler
