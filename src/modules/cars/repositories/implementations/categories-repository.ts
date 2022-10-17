import { prismaClient } from "../../../../database/prismaClient";
import { ICategoriesRepository } from "../Icategories-repository";
import { Categories } from "../../entities/categories";

export class PrismaCategoriesRepository implements ICategoriesRepository {
  async findByName(name: string): Promise<boolean> {
    return !!(await prismaClient.categories.findFirst({
      where: {
        name,
      },
    }));
  }
  async createCategory(data: Categories): Promise<Categories> {
    return await prismaClient.categories.create({
      data,
    });
  }
  async listCategories(): Promise<Categories[]> {
    return await prismaClient.categories.findMany();
  }
}
