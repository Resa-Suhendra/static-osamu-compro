import { prisma } from "../prisma/client";
import type { NewContactMessage } from "../utils/validation";

export const contactMessagesService = {
  async list() {
    return prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  async create(data: NewContactMessage) {
    return prisma.contactMessage.create({
      data,
    });
  },
};

