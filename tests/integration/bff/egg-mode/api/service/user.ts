import { Service } from '@gulu/application-http';

export default class UserService extends Service {
  async query() {
    return {
      username: 'gulu',
      email: 'gulu@bytedance.com',
    };
  }
}
