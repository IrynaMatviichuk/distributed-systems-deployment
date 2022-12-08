import { Router } from 'express';

// Routes
import todoRoutes from './todos';
import userRoutes from './users';
import healthRoutes from './health';

const router = Router();

router
  .use('/todos', todoRoutes)
  .use('/users', userRoutes)
  .use('/health', healthRoutes);

export default router;
