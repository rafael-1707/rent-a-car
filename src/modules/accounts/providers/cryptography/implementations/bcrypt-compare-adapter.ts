import bcrypt from "bcrypt";
import { Idecrypt } from "../Idecrypt";

export class BcryptCompareAdapter implements Idecrypt {
  constructor(private readonly salt: number) {}
  async compareHash(value: string, hash: string): Promise<boolean> {
    const isValid = bcrypt.compareSync(value, hash);
    return isValid;
  }
}
