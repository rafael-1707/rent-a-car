import { IUserRepository } from "../Iuser-repository";
import { Users } from "../../entities/user";
import { prismaClient } from "../../../../database/prismaClient";

export class PrismaUsersRepository implements IUserRepository {
  async findByEmail(email: string): Promise<boolean> {
    return !!(await prismaClient.users.findFirst({
      where: {
        email,
      },
    }));
  }

  async create(data: Users): Promise<void> {
    await prismaClient.users.create({
      data,
    });
  }

  async findUserByEmail(email: string): Promise<Users> {
    const user = await prismaClient.users.findUnique({
      where: {
        email,
      },
    });

    return user as Users;
  }
  async updateById(id: number, data: Users): Promise<void> {
    await prismaClient.users.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        driver_license: data.driver_license,
      },
    });
  }
  async deleteById(id: number): Promise<void> {
    await prismaClient.users.delete({
      where: {
        id: id,
      },
    });
  }
  async findById(id: number): Promise<Users> {
    const user = await prismaClient.users.findUnique({
      where: {
        id,
      },
    });

    return user as Users;
  }
  async list(): Promise<Users[]> {
    const users = await prismaClient.users.findMany();

    return users as Users[];
  }
}
