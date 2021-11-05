const path = require('path');
const axios = require('axios');
const {
  // markGuardian,
  getPort,
  launchApp,
  modernStart,
  killApp,
  modernBuild,
  installDeps,
} = require('../../../utils/modernTestUtils');

const fixtures = path.resolve(__dirname, '../../bff');

beforeAll(async () => {
  await installDeps(fixtures);
});

let port;
// describe('test bff', () => {
//   beforeAll(async () => {
//     port = await getPort();
//   });
//   it(`should return true value start request bff `, async () => {
//     const appPath = path.resolve(__dirname, '../func');
//     await modernBuild(appPath, [], {
//       cwd: appPath,
//     });
//     const app = await modernStart(appPath, port, {
//       cwd: appPath,
//     });
//     const ctx = await axios.get(`http://127.0.0.1:${port}/bff_api_api/test`);
//     const pageCtx = await axios.get(`http://127.0.0.1:${port}`);
//     const { data } = ctx;
//     const { data: pageData } = pageCtx;
//     await killApp(app);
//     expect(data).not.toBeNull();
//     expect(pageData).not.toBeNull();
//     expect(data.hello).toBe('world');
//     expect(pageData).toMatch('doctype');
//   });
//   it(`should return true value dev request bff `, async () => {
//     const appPath = path.resolve(__dirname, '../func');
//     const app = await launchApp(appPath, port, {
//       cwd: appPath,
//     });
//     // 保证 BFF 启动
//     await new Promise(resolve => {
//       setTimeout(() => {
//         resolve();
//       }, 5000);
//     });
//     const ctx = await axios.get(`http://127.0.0.1:${port}/bff_api_api/test`);
//     const { data } = ctx;
//     await killApp(app);
//     expect(data).not.toBeNull();
//     expect(data.hello).toBe('world');
//   });
// });

describe('test egg(lambda) mode', () => {
  let url = '';
  beforeAll(async () => {
    port = await getPort();
    url = `http://127.0.0.1:${port}`;
  });

  const supportGetAndQuery = async () => {
    const name = 'hello';
    const phone = '1357';

    const ctx = await axios.get(`${url}/api`, {
      params: {
        name,
        phone,
      },
    });
    const { data } = ctx;
    expect(data).not.toBeNull();
    expect(data.name).toBe(name);
    expect(data.phone).toBe(phone);
  };

  const supportDynamicGetRoute = async () => {
    const sku = `gray`;
    const id = '334';
    const ctx = await axios.get(`${url}/api/${sku}/sale/${id}/bag`);
    const { data } = ctx;
    expect(data).not.toBeNull();
    expect(data.sku).toBe(sku);
    expect(data.id).toBe(id);
  };

  const supportDynamicPostRoute = async () => {
    const sku = `gray`;
    const id = 334;
    const price = 50;
    const ctx = await axios.post(`${url}/api/${sku}/sale/${id}/bag`, {
      sku,
      id,
      price,
    });
    const { data } = ctx;
    expect(data).not.toBeNull();
    expect(data.sku).toBe(sku);
    expect(data.id).toBe(id);
    expect(data.price).toBe(price);
  };

  const supportUseContext = async () => {
    const user = {
      username: 'old-user',
      email: '2143@byte.com',
    };
    const newUser = {
      username: 'new-user',
      email: '234234@134.com',
    };
    const ctx = await axios.post(
      `${url}/api/user?username=${user.username}&email=${user.email}`,
      newUser,
    );
    const { data } = ctx;
    expect(data).not.toBeNull();
    expect(data.service).not.toBeNull();
    expect(data.oldUser.username).toBe(user.username);
    expect(data.newUser.username).toBe(newUser.username);
  };

  const supportDataType = async () => {
    const { URLSearchParams } = require('url');
    const params = new URLSearchParams();
    params.append('name', 'xxx');
    params.append('phone', '12344');
    const ctx = await axios.post(`${url}/api`, params);
    const { data } = ctx;
    expect(data).not.toBeNull();
  };

  const supportPostAndData = async () => {
    const sku = 'blue';
    const id = 1357;
    const price = 58;

    const ctx = await axios.post(
      `http://127.0.0.1:${port}/api/${sku}/sale/${id}/bag`,
      {
        price: 58,
      },
    );
    const { data } = ctx;
    expect(data).not.toBeNull();
    expect(data.sku).toMatch(sku);
    expect(data.id).toBe(id);
    expect(data.price).toBe(price);
  };

  describe('should support dev mode', () => {
    let app = null;
    beforeAll(async () => {
      const appPath = path.resolve(__dirname, '../egg-mode');
      app = await launchApp(appPath, port, {
        cwd: appPath,
      });
      // 保证 BFF 启动
      await new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 10000);
      });
    });

    it(`should support get and query`, supportGetAndQuery);

    // it(`should support dynamic get route`, supportDynamicGetRoute);

    // it(`should support dynamic post route`, supportDynamicPostRoute);

    // it(`should support use context`, supportUseContext);

    // it(`should support data-type`, supportDataType);

    // it('should support post and data', supportPostAndData);

    afterAll(async () => {
      await killApp(app);
    });
  });

  describe('should support prod mode', () => {
    const appPath = path.resolve(__dirname, '../egg-mode');

    let app = null;
    beforeAll(async () => {
      await modernBuild(appPath, [], {
        cwd: appPath,
      });

      await new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 1300);
      });
      app = await modernStart(appPath, port, {
        cwd: appPath,
      });
    });

    it(`should support get and query`, supportGetAndQuery);

    it(`should support dynamic get route`, supportDynamicGetRoute);

    it(`should support dynamic post route`, supportDynamicPostRoute);

    it(`should support use context`, supportUseContext);

    it(`should support data-type`, supportDataType);

    it('should support post and data', supportPostAndData);

    afterAll(async () => {
      await killApp(app);
    });
  });

  describe('schema', () => {
    const appPath = path.resolve(__dirname, '../schema');

    beforeAll(async () => {
      jest.setTimeout(1000 * 60 * 2);
      port = await getPort();
      url = `http://127.0.0.1:${port}`;
    });

    const supportGet = async () => {
      const name = 'hello';
      const method = 'get123333555';

      const ctx = await axios.get(`${url}/xxx/test`, {});
      const { data } = ctx;
      expect(data).not.toBeNull();
      expect(data.value).not.toBeNull();
      expect(data.value.name).toBe(name);
      expect(data.value.method).toBe(method);
    };

    const supportPost = async () => {
      const a = 1;
      const b = 2;

      const ctx = await axios.post(`${url}/xxx/test`, { a, b });
      const { data } = ctx;
      expect(data).not.toBeNull();
      expect(data.value).toBe(a + b);
    };

    const supportDelete = async () => {
      const method = 'delete';

      const ctx = await axios.delete(`${url}/xxx/test`, {});
      const { data } = ctx;
      expect(data).not.toBeNull();
      expect(data.value).not.toBeNull();
      expect(data.value.method).toBe(method);
    };

    const supportContext = async () => {
      const id = 'foo';
      const from = 'xxx';
      const cc = 'hxhxhx';

      const ctx = await axios.get(`${url}/xxx/user/${id}?from=${from}`, {});
      const { data } = ctx;
      expect(data).not.toBeNull();
      expect(data.value.params.id).toBe(id);
      expect(data.value.id).toBe(id);
      expect(data.value.cc).toBe(cc);
    };

    const supportParamsAndData = async () => {
      const id = 'foo';
      const name = 'hello';
      const phone = '1357';

      const ctx = await axios.post(`${url}/xxx/user/${id}`, { name, phone });
      const { data } = ctx;
      expect(data).not.toBeNull();
      expect(data.value.id).toBe(id);
      expect(data.value.name).toBe(name);
      expect(data.value.phone).toBe(phone);
    };

    describe('dev', () => {
      let app = null;
      beforeAll(async () => {
        app = await launchApp(appPath, port, {
          cwd: appPath,
        });
        // 保证 BFF 启动
        await new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, 10000);
        });
      });

      it('get', supportGet);
      it('post', supportPost);
      it('delete', supportDelete);

      it('useContext', supportContext);
      it('params and data', supportParamsAndData);

      afterAll(async () => {
        await killApp(app);
      });
    });

    describe('prod', () => {
      let app = null;
      beforeAll(async () => {
        await modernBuild(appPath, [], {
          cwd: appPath,
        });

        await new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, 1300);
        });
        app = await modernStart(appPath, port, {
          cwd: appPath,
        });
      });

      it('get', supportGet);
      it('post', supportPost);
      it('delete', supportDelete);

      it('useContext', supportContext);
      it('params and data', supportParamsAndData);

      afterAll(async () => {
        await killApp(app);
      });
    });
  });
});
