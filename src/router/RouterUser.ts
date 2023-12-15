import { Router } from "express";
import RepoUserPrisma from "../external/RepoUserPrisma";
import CreateUSer from "../core/user/service/CreateUser";
import CreateController from "../adaptters/user/cretaeController";
import GetUser from "../core/user/service/GetUser";
import GetController from "../adaptters/user/GetController";

export const UserRouter = Router()


const repoUser = new RepoUserPrisma()

const create = new CreateUSer(repoUser)
new CreateController(UserRouter, create)

const get = new GetUser(repoUser)
new GetController(UserRouter, get)