import type { Context } from "hono";
import { userCreateSchema } from "../utils/validation";
import { usersService } from "../services/usersService";
import { jsonError, jsonSuccess } from "../utils/response";

export const getUsers = async (c: Context) => {
  const users = await usersService.list();
  return c.json(jsonSuccess(users));
};

export const createUser = async (c: Context) => {
  const body = await c.req.json();
  const parsed = userCreateSchema.safeParse(body);

  if (!parsed.success) {
    return c.json(
      jsonError("VALIDATION_ERROR", "Data tidak valid", parsed.error.flatten()),
      400
    );
  }

  const user = await usersService.create(parsed.data);
  return c.json(jsonSuccess(user), 201);
};

