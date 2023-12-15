import { Router } from "express";
import CreateMessage from "../../core/message/service/CretaeMessage";

import { z } from 'zod'

const Schema = z.object({
  conteudo: z.coerce.string(),
  numberSender: z.coerce.number(),
  numberfate: z.coerce.number()
})

export default class CreateController {

  constructor(
    readonly server: Router,
    readonly CasoDeUso: CreateMessage
  ) {
    server.post('/', async (req, res, next) => {

      const { conteudo, numberSender, numberfate } = req.body
      try {

        const isValidate = Schema.safeParse({ conteudo, numberSender, numberfate })

        if (!isValidate.success) {
          res.status(400).json('error')
          throw new Error()
        }

        const createMessage = await CasoDeUso.execut({ conteudo, numberfate, numberSender })

        res.send(createMessage)

      } catch (error) {
        next(error)
      }
    })
  }
}