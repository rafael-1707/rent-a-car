import { CreateSpecificationService } from "./specification-usecase";
import { SpecificationController } from "./specification-controller";
import { PrismaSpecificationsRepository } from "../../repositories/implementations/specifications-repository";

const specificationRepository = new PrismaSpecificationsRepository();
const createSpecificationService = new CreateSpecificationService(
  specificationRepository
);
const specificationsController = new SpecificationController(
  createSpecificationService
);

export { specificationsController };
