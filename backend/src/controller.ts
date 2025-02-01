const prisma = new PrismaClient();

export const getUsers = async (ctx: Context) => {
  const users = await prisma.user.findMany();
  ctx.response.body = users;
};

export const createUser = async (ctx: Context) => {
  const { name, email } = await ctx.request.body().value;

  const user = await prisma.user.create({
    data: { name, email },
  });

  ctx.response.status = 201;
  ctx.response.body = user;
};
