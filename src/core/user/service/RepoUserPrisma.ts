import User from "../model/User";

export default interface RepoUser {
  getUSerNumber(number: number): Promise<User | void>,
  create(data: User): Promise<void>
}