import User from "./entities/types/User";

declare namespace Express {
    export interface Request {
       user?: User
    }
 }