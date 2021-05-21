import { User } from "../Domain/User";
import { IUserRepository } from "./IUserRepository";

export class PostgresRepository implements IUserRepository {

  private users: User[] = [];

  findByEmail(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  findByName(name: string): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  findByCPF(name: string): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  findByRG(name: string): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  findByBirthday(birthday: Date): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  save(user: User): Promise<void> {
    this.users.push(user);
    return
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

}