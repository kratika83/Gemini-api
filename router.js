import { Router } from "express";
import controller from "./controller.js";
const router = Router();

router.post('/prompt-post', controller);

export default router;