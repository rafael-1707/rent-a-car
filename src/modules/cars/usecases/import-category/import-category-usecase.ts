import { ICategoriesRepository } from "../../repositories/Icategories-repository";
import fs from "fs";
import { parse } from "csv-parse";

export class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(file: Express.Multer.File): Promise<void> {
    fs.createReadStream(file.path)
      .pipe(parse())
      .on("data", async (line: any) => {
        const [name, description] = line;

        if (!this.categoriesRepository.findByName(name)) {
          this.categoriesRepository.createCategory({ name, description });
        } else {
          throw new Error("Category already exists");
        }
      })
      .on("end", () => {
        return "Import done successfully";
      });
  }
}
