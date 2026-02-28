import { Hono } from "hono";
import {
  getContactMessages,
  createContactMessage,
} from "../controllers/contactMessagesController";

const contactMessagesRoute = new Hono();

contactMessagesRoute.get("/", getContactMessages);
contactMessagesRoute.post("/", createContactMessage);

export { contactMessagesRoute };

