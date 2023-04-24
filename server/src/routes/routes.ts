import express from "express";
import { authUsers, addUsers } from "../controllers/user";
import { addTask, getTasks } from "../controllers/tasks";

const router = express.Router();

router.post("/", addUsers);
router.post("/login", authUsers);
router.post("/tasks", addTask);
router.get("/tasks:id", getTasks);

export default router;