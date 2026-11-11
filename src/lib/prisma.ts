type PrismaClientLike = {
  $connect: () => Promise<void>;
  $disconnect: () => Promise<void>;
};

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientLike | undefined;
};

export const prisma: PrismaClientLike =
  globalForPrisma.prisma ??
  ({
    $connect: async () => undefined,
    $disconnect: async () => undefined,
  } satisfies PrismaClientLike);

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
