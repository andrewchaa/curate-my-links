export type MyLink = {
  email: string;
  link: string;
  title: string;
  description: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type StatusCode = '200' | '201' | '204' | '400' | '404' | '422' | '500'
export type Result<T> = {
  data?: T,
  total?: number,
  code: StatusCode
  error?: string
}
