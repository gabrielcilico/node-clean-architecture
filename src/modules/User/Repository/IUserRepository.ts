import { User } from '../Domain/User'

export interface IUserRepository {
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
  findByName(name: string): Promise<User[]>
  findByCPF(name: string): Promise<User[]>
  findByRG(name: string): Promise<User[]>
  findByBirthday(birthday: Date): Promise<User[]>
  findAll(): Promise<User[]>
  save(user: User): Promise<void>
  delete(id: string): Promise<void>
}