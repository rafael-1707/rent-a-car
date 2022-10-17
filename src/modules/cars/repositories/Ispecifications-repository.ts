import { Specifications } from "../entities/specifications";

export interface ISpecificationsRepository {
  findByName(name: string): Promise<boolean>;
  createSpecification(data: Specifications): Promise<Specifications>;
}
