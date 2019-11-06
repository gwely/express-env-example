import {
  Request,
  Response,
  NextFunction,
  Express,
  Router,
} from "express";
import glob = require("glob");

export class ApiRouter {
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

    const router = glob.sync('**/router.ts', { cwd: `${__dirname}/` })
      .reduce((
        rootRouter: Router,
        filename: string,
      ) => {
        const router = require(`./${filename}`);
        if (Object.getPrototypeOf(router) !== Router) {
          return rootRouter;
        }
        return rootRouter.use(router);
      }, Router({ mergeParams: true }));

    this.server.use("/api", router);
  }
}
