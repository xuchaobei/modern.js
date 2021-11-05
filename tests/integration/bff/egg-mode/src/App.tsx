import React from 'react';
import { Switch, Route } from '@modern-js/runtime/router';
import { post as addUser } from '@api/user';
import get, { post as hello } from '@api/index';
import { post as addSku } from '@api/[sku]/sale/[id]/bag';
import { useLoader } from '@modern-js/runtime';

const App: React.FC = () => {
  useLoader(async () => {
    await get({
      query: {
        name: 'kjc',
        phone: '12345',
      },
    });

    hello({
      data: {
        name: 'kjc',
        phone: '12345',
      },
    });

    addUser({
      query: {
        username: 'kjc',
        email: '312324@234.com',
      },
      data: {
        username: 'kjc',
        email: 'kongjiacong@bytedance.net',
      },
    });

    addSku('mm', 'mmid', { data: { price: '1' } });
  });
  return (
    <Switch>
      <Route exact={true} path="/">
        <div>Hello Jupiter!</div>
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  );
};

export default App;
