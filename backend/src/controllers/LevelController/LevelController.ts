import LevelRepositoryPrisma from "@/database/LevelRepoPrisma";
import express = require("express");
import prisma from "../../../prisma/client";
import validator from "./Level.validator";
const levelsRouter = express.Router()

const levelRepo = new LevelRepositoryPrisma(prisma);


levelsRouter.get("/", async (req, res) => {
    const levels = await levelRepo.getAll()

    if(!levels) {
        res.status(500).json({error: "Can not get level"});
        return;
    }

    res.json({data: levels})
})

levelsRouter.post("/", validator.create, async (req, res) => {
    const level = await levelRepo.create(req.body);
    if (!level) res.json({errors: ["cant create"]});

    res.json(level);
    res.end()
})

levelsRouter.put("/", validator.update, async (req, res) => {
    const {id, data} = req.body;
    const level = await levelRepo.update(id, data);

    if(!level) {
        res.status(500).json({"error": "Can\`t update level"}).end()
    }

    res.json(level)
})

levelsRouter.delete("/", async (req, res) => {
    const {id} = req.body;
    if(typeof id !== "number") res.status(400).end()

    const levelDeleted = await levelRepo.delete(id);

    if(!levelDeleted) {
        res.json({"errors": "Can`t delte level, repo error"}).end()
    }

    res.json(levelDeleted).end()

})



export default levelsRouter;