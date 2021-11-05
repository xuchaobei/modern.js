import { Struct, String, match } from '@modern-js/runtime/server';
import { getName } from '@src/name';

const GetInputSchema = {};

const GetOutputSchema = Struct({
  method: String,
  name: String,
});

export const get = match(
  {
    request: GetInputSchema,
    response: GetOutputSchema,
  },
  () => {
    const { name } = getName();
    console.info({ name });
    return { name, method: 'get123333555' };
  },
);

const PostInputSchema = {
  a: Number,
  b: Number,
};

const PostOutputSchema = Number;

export const post = match(
  {
    request: {
      data: PostInputSchema,
    },
    response: PostOutputSchema,
  },
  ({ data: { a, b } }) => a + b,
);

const DeleteInputSchema = {};

const DeleteOutputSchema = Struct({
  method: String,
});

export const DELETE = match(
  {
    request: DeleteInputSchema,
    response: DeleteOutputSchema,
  },
  () => ({
    method: 'delete',
  }),
);
