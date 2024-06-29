import { Express } from "express"
export default (app: Express) => {
    Object.defineProperty(app.request, "user", {
        configurable: true,
        enumerable: true
    })
}