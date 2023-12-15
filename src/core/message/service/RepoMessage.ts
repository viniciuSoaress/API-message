import Message from "../model/message";

export default interface RepoMessage{
  create(data: Message): Promise<string>,
  get(number: number): Promise<Message[]>,
}