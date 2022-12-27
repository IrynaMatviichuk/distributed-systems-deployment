import { jsonResponse } from '../utils/response';
import { Request, Response } from 'express';

export const health = async (req: Request, res: Response) => {
  return jsonResponse(res, 200, 'Healthy (test CAAS workflow)');
};
