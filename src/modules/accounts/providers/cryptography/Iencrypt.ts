export interface Iencrypt {
  hash(value: string): Promise<string>;
}
