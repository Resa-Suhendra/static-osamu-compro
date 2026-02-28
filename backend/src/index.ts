import { Hono } from "hono";
import { cors } from "hono/cors";
import { usersRoute } from "./routes/users";
import { contactMessagesRoute } from "./routes/contactMessages";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type"],
  })
);

app.route("/api/users", usersRoute);
app.route("/api/contact-messages", contactMessagesRoute);

app.get("/health", (c) =>
  c.json({
    success: true,
    data: { status: "ok" },
  })
);

const port = Number(process.env.PORT ?? 4000);

console.log(`Backend listening on http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};

