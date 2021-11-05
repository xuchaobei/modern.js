// eslint-disable-next-line node/no-unsupported-features/es-syntax
import id from '../user/[id]';

describe('test', () => {
  it(`should return true value start request bff `, async () => {
    const val = await id('1');

    expect(val).toEqual({ id: '1' });
  });
});
