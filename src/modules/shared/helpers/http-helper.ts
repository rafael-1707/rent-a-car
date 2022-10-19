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

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error,
});

export const unauthorized = (error: Error): HttpResponse => ({
  statusCode: 401,
  body: error,
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error,
});

export const notFound = (error: Error): HttpResponse => ({
  statusCode: 404,
  body: error,
});
