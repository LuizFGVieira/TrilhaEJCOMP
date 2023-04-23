import express from "express";
import { authUsers, addUsers } from "../controllers/user";

const router = express.Router();

router.post("/", addUsers);
router.post("/login", authUsers);

export default router;