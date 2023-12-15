import CasoDeUso from "../../shared/CasoDeUso";
import Message from "../model/message";
import RepoMessage from "./RepoMessage";




export default class CreateMessage implements CasoDeUso<Message, string>{

  constructor(private readonly repoMessage: RepoMessage) { }

  async execut(data: Message): Promise<string> {
    return await this.repoMessage.create(data)
  }

}