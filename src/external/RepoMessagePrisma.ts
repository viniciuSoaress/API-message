import { PrismaClient } from "@prisma/client";
import RepoMessage from "../core/message/service/RepoMessage";
import Message from "../core/message/model/message";


export default class RepoMessagePrisma implements RepoMessage {

  readonly prisma = new PrismaClient()

  async create(data: Message): Promise<string> {
    const { conteudo, numberfate, numberSender } = data
    await this.prisma.message.create({
      data: {
        conteudo,
        numberfate,
        numberSender
      },
      select: {
        numberfate: true
      }
    })

    return conteudo
  }


  async get(number: number): Promise<Message[]> {
    return await this.prisma.message.findMany({
      include: { sender: true },
      where: {
        OR: [
          { numberfate: number },
          { numberSender: number }
        ]
      }
    })
  }
}