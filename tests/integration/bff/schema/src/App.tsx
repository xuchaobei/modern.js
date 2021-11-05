import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from '@modern-js/runtime/router';
import { useLoader } from '@modern-js/runtime';
import { get, DELETE, post } from '@api/test';
// import user from '@api/user/[id]'

// console.log(111)
// test()
// add("1", "2")
// user(1, 2)

// const request = (url: string, method: string = 'get', data?: any) => {
//   let body = data ? JSON.stringify(
//     data
//   ) : null
//   return fetch(url, {
//     body: body,
//     method: method,
//     headers: {
//       'content-type': 'application/json'
//     }
//   }).then(res => {
//     return res.json()
//   })
// }

// request('/xxx/user/12', 'post', {name: 'vfdvdfv', phone: 1234})
//   .then(json => {
//     console.log('/api', json);
//   });

// request('/xxx/user/12', 'delete', {name: 'vfdvdfv', phone: 1234})
//   .then(json => {
//     console.log('/api', json);
//   });

// request('/xxx/user/12?from=modern', 'get')
//   .then(json => {
//     console.log('/api', json);
//   });

// request('/xxx/test')
//   .then(json => {
//     console.log('/test', json);
//   });

const App: React.FC = () => {
  const [getStr, setGetStr] = useState('');
  const [postStr, setPostStr] = useState('');
  const [deleteStr, setDeleteStr] = useState('');
  useLoader(async () => {
    await get({}).then(res => setGetStr(JSON.stringify(res)));

    await post({ data: { a: 1, b: 2 } }).then(res =>
      setPostStr(JSON.stringify(res)),
    );

    await DELETE({}).then(res => setDeleteStr(JSON.stringify(res)));
  });

  useEffect(() => {
    // eslint-disable-next-line promise/prefer-await-to-then
    get({}).then(res => {
      const str = JSON.stringify(res);
      console.info(str);
      setGetStr(str);
    });

    // eslint-disable-next-line promise/prefer-await-to-then
    post({ data: { a: 1, b: 2 } }).then(res => setPostStr(JSON.stringify(res)));

    // eslint-disable-next-line promise/prefer-await-to-then
    DELETE({}).then(res => setDeleteStr(JSON.stringify(res)));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/">
          <div>Hello Jupiter!</div>
          <div>get: {getStr}</div>
          <div>post: {postStr}</div>
          <div>delete: {deleteStr}</div>
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
