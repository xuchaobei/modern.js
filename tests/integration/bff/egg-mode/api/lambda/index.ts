export async function post({
  data: { name, phone },
}: {
  data: { name: string; phone: string };
}) {
  return {
    name,
    phone,
    method: 'post',
  };
}

export default async function get({
  query: { name, phone },
}: {
  query: {
    name: string;
    phone: string;
  };
}) {
  return {
    name,
    phone,
  };
}
