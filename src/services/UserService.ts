import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  errorFormat: 'pretty',
});

const list = async () => {
  const users = await prisma.user.findMany({ include: { posts: true } });

  return users;
};

const create = async (options: CreateOptions) => {
  const user = await prisma.user.create({ data: options });

  return user;
};

export default { list, create };

interface CreateOptions {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
