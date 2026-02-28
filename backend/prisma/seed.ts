import { prisma } from "../src/prisma/client";

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "demo@cme-engineering.co.id" },
    update: {},
    create: {
      name: "Demo User",
      email: "demo@cme-engineering.co.id",
    },
  });

  await prisma.contactMessage.create({
    data: {
      name: "Demo Lead",
      email: "lead@example.com",
      subject: "Contoh pesan dari landing page",
      message: "Halo, saya tertarik dengan solusi OSAMU dan ingin diskusi lebih lanjut.",
      userId: user.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

