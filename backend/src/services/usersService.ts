import { prisma } from "../prisma/client";
import type { NewUser } from "../utils/validation";

export const usersService = {
  async list() {
    return prisma.user.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  async create(data: NewUser) {
    return prisma.user.create({
      data,
    });
  },
};

