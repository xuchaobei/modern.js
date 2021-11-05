import bag, { post as postBag } from '../lambda/[sku]/sale/[id]/bag';

console.log(bag);

describe('test sku sale bag', () => {
  it('should get right sku info', async () => {
    const info = await bag('sku123', '123');

    expect(info).toEqual({
      sku: 'sku123',
      id: '123',
      message: 'sale',
    });
  });

  it('should modify price correctly', async () => {
    const res = await postBag('sku123', '123', {
      data: { price: '99' },
    });

    expect(res).toEqual({
      sku: 'sku123',
      id: 123,
      price: '99',
      method: 'post',
    });
  });
});
