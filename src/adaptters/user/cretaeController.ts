import { Router } from "express";
import CreateUSer from "../../core/user/service/CreateUser";


export default class CreateController {

  constructor(
    readonly server: Router,
    readonly CasoDeUso: CreateUSer
  ) {
    server.post('/', async (req, res, next) => {
      try {
        const { number, name } = req.body as any

        await CasoDeUso.execut({ name, number })
        res.status(201).end()
      } catch (error) {
        next(error)
      }
    })
  }
}