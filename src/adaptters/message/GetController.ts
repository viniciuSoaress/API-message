import { Router } from "express";
import GetMessage from "../../core/message/service/GetMessages"


export default class GetController {

  constructor(
    readonly server: Router,
    readonly CasoDeUso: GetMessage
  ){
    server.get('/:number', async (req, res, next) => {
      const number = parseInt(req.params.number)
      try {
        const message = await CasoDeUso.execut(number)

        res.send(message)
      } catch (error) {
        next(error)
      }
    })
  }
}