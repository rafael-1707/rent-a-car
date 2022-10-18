import { IToken } from "../Itoken";
import jwt from "jsonwebtoken";
import { Jwt } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export class JwtToken implements IToken {
  private readonly secret: string;
  private readonly expiresIn: string;

  constructor(secret: string, expiresIn: string) {
    this.secret = secret;
    this.expiresIn = expiresIn;
  }

  generateToken(id: string, email: string): string {
    const token = jwt.sign({ id, email }, this.secret, {
      expiresIn: this.expiresIn,
    });
    return token;
  }

  verifyToken(token: string): Jwt {
    const decoded = jwt.verify(token, this.secret);
    return decoded as Jwt;
  }
}
