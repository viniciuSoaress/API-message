import { Router } from "express";
import GetUser from "../../core/user/service/GetUser";


export default class GetController {

  constructor(
    readonly server: Router,
    readonly CasoDeUso: GetUser
  ) {
    server.get('/:number', async (req, res, next) => {
      try {
        const number = req.params.number

       const user = await CasoDeUso.execut(Number(number))
       res.send(user)
      } catch (error) {
        next(error)
      }
    })
  }
}