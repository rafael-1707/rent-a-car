import { HttpResponse } from "../../main/providers/express/http";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});
