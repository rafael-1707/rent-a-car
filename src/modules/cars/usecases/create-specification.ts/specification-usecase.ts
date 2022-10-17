import { ISpecificationsRepository } from "../../repositories/Ispecifications-repository";

export type IRequest = {
  name: string;
  description: string;
};

export class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  async execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) return new Error(name);

    this.specificationsRepository.createSpecification({
      name,
      description,
    });
    return "specification created successfully";
  }
}
