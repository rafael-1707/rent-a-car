export interface Idecrypt {
  compareHash(value: string, hash: string): Promise<boolean>;
}
