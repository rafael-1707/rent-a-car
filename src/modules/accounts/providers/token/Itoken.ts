import { Jwt } from "jsonwebtoken";

export interface IToken {
  generateToken(id: string, email: string): string;
  verifyToken(token: string): Jwt;
}
