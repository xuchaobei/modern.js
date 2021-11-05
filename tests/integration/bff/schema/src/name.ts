export type A = {
  name: string;
};

export const getName = (): A => {
  return {
    name: 'hello',
  };
};
