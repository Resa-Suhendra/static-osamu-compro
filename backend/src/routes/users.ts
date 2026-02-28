import { Hono } from "hono";
import { getUsers, createUser } from "../controllers/usersController";

const usersRoute = new Hono();

usersRoute.get("/", getUsers);
usersRoute.post("/", createUser);

export { usersRoute };

