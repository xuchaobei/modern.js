import { useContext } from '@modern-js/runtime/server';

export async function post({
  query: { username, email },
  data,
}: {
  query: {
    username: string;
    email: string;
  };
  data: { username: string; email: string };
}) {
  const ctx = useContext();
  console.log(ctx);
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const service = await ctx.service.user.query();
  return {
    oldUser: {
      username,
      email,
    },
    service,
    newUser: data,
  };
}
