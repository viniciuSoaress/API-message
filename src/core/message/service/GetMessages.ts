import CasoDeUso from "../../shared/CasoDeUso";
import Message from "../model/message";
import RepoMessage from "./RepoMessage";


export default class GetMessages implements CasoDeUso<number, Message[]>{

  constructor(private readonly repoMessage: RepoMessage){}


  async execut(data: number): Promise<Message[]> {
    return await this.repoMessage.get(data)
  }
}