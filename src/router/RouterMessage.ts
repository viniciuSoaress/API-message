import { Router } from "express";
import RepoMessagePrisma from "../external/RepoMessagePrisma";
import CreateMessage from "../core/message/service/CretaeMessage";
import CreateController from "../adaptters/message/CreateController";
import GetMessages from "../core/message/service/GetMessages";
import GetController from "../adaptters/message/GetController";

export const RouterMessage = Router()

const repoPrisma = new RepoMessagePrisma()

const create = new CreateMessage(repoPrisma)
new CreateController(RouterMessage, create)

const get = new GetMessages(repoPrisma)
new GetController(RouterMessage, get)