import { post as modifyUser } from '../lambda/user';

describe('test user', () => {
  it('should modify user', async () => {
    const data = await modifyUser({
      query: {
        username: 'anchao',
        email: 'anchao@bytedance.com',
      },
      data: {
        username: 'anchao1',
        email: 'anchao1@bytedance.com',
      },
    });

    expect(data).toEqual({
      oldUser: {
        username: 'anchao',
        email: 'anchao@bytedance.com',
      },
      service: {
        email: 'gulu@bytedance.com',
        username: 'gulu',
      },
      newUser: {
        username: 'anchao1',
        email: 'anchao1@bytedance.com',
      },
    });
  });
});
