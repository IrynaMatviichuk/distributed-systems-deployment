import { Router } from 'express';
import { HealthController } from '../controllers';

const router = Router();

router.get('/', HealthController.health);

export default router;
