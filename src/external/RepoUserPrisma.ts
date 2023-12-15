import { PrismaClient } from "@prisma/client";
import RepoUser from "../core/user/service/RepoUserPrisma";
import User from "../core/user/model/User";


export default class RepoUserPrisma implements RepoUser {
  readonly prisma = new PrismaClient()


  async getUSerNumber(number: number): Promise<void | User> {
    return await this.prisma.user.findFirst({
      where: { number }
    }) ?? undefined
  }


  async create(data: User): Promise<void> {
    await this.prisma.user.create({
      data: data
    })
  }
}