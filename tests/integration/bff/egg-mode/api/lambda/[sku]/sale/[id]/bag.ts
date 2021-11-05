export default async function(sku: string, id: string) {
  return {
    sku,
    id,
    message: 'sale',
  };
}

export async function post(
  sku: string,
  id: string,
  {
    data,
  }: {
    data: Record<string, unknown>;
  },
) {
  return {
    sku,
    id: Number(id),
    price: data.price,
    method: 'post',
  };
}
