import { Request, Response, NextFunction, Express } from "express";
const apiRoutes = require("./routes/api");

export class Router {
  constructor(
    private readonly server: Express,
  ) {}

  public init(): void {
    this.server.get('*', (
      req: Request,
      res: Response,
      next: NextFunction,
    ) => {
        console.log('Request was made to: ' + req.originalUrl);
        return next();
    });

    this.server.get('/', (
      req: Request,
      res: Response,
    ) => {
        res.redirect('/api/v1/dogs');
    });

    this.server.use('/api', apiRoutes);
  }
}
