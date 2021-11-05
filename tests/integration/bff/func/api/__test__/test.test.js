// eslint-disable-next-line node/no-unsupported-features/es-syntax
import test from '../test';

describe('test', () => {
  it(`should return true value start request bff `, async () => {
    const val = await test();

    expect(val).toEqual({ hello: 'world' });
  });
});
