import bcrypt from "bcrypt";
import { Iencrypt } from "../Iencrypt";

export class BcryptAdapter implements Iencrypt {
  constructor(private readonly salt: number) {}
  async hash(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt);
    return hash;
  }
}
