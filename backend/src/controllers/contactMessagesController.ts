import type { Context } from "hono";
import { contactMessageCreateSchema } from "../utils/validation";
import { contactMessagesService } from "../services/contactMessagesService";
import { jsonError, jsonSuccess } from "../utils/response";

export const getContactMessages = async (c: Context) => {
  const messages = await contactMessagesService.list();
  return c.json(jsonSuccess(messages));
};

export const createContactMessage = async (c: Context) => {
  const body = await c.req.json();
  const parsed = contactMessageCreateSchema.safeParse(body);

  if (!parsed.success) {
    return c.json(
      jsonError(
        "VALIDATION_ERROR",
        "Data tidak valid",
        parsed.error.flatten()
      ),
      400
    );
  }

  const message = await contactMessagesService.create(parsed.data);
  return c.json(jsonSuccess(message), 201);
};

