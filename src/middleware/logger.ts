import { Request, Response, NextFunction } from 'express';

/**
 * Middleware function for logging timestamp, HTTP method, and requested URL.
 * @param req Express request object.
 * @param res Express response object.
 * @param next Express next function.
 */
const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  const { method, url } = req;

  console.log(`[${timestamp}] ${method} ${url}`);
  next();
};

export default loggerMiddleware;
