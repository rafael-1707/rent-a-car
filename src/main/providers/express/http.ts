export interface HttpRequest {
  body?: any;
  file?: any;
  params?: any;
  query?: any;
  headers?: any;
}

export interface HttpResponse {
  statusCode: number;
  body?: any;
}
