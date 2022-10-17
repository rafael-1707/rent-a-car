import { ISpecificationsRepository } from "../Ispecifications-repository";
import { prismaClient } from "../../../../database/prismaClient";
import { Specifications } from "../../entities/specifications";

export class PrismaSpecificationsRepository
  implements ISpecificationsRepository
{
  async findByName(name: string): Promise<boolean> {
    return !!(await prismaClient.categories.findFirst({ where: { name } }));
  }
  async createSpecification(data: Specifications): Promise<Specifications> {
    return await prismaClient.categories.create({ data });
  }
}
