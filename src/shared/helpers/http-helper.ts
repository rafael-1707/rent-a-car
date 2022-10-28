import { HttpResponse } from "../../main/providers/express/http";

export class Response {
  static ok(data: any): HttpResponse {
    return {
      statusCode: 200,
      body: data,
    };
  }

  static created(data: any): HttpResponse {
    return {
      statusCode: 201,
      body: data,
    };
  }

  static NoContent(): HttpResponse {
    return {
      statusCode: 204,
    };
  }

  static badRequest(error: Error): HttpResponse {
    return {
      statusCode: 400,
      body: {
        error: error.message,
      },
    };
  }

  static unauthorized(error: Error): HttpResponse {
    return {
      statusCode: 401,
      body: error,
    };
  }

  static forbidden(error: Error): HttpResponse {
    return {
      statusCode: 403,
      body: error,
    };
  }

  static notFound(error: Error): HttpResponse {
    return {
      statusCode: 404,
      body: error,
    };
  }

  static serverError(error: Error): HttpResponse {
    return {
      statusCode: 500,
      body: error,
    };
  }
}
