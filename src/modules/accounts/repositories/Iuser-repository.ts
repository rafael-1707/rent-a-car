import { Users } from "../entities/user";

export interface IUserRepository {
  create(data: Users): Promise<void>;
  findByEmail(email: string): Promise<boolean>;
  findUserByEmail(email: string): Promise<Users>;
  updateById(id: number, data: Users): Promise<void>;
  deleteById(id: number): Promise<void>;
  findById(id: number): Promise<Users>;
  listAll(): Promise<Users[]>;
}
