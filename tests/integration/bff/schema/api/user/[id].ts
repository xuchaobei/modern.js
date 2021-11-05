import {
  useContext,
  Struct,
  Record,
  Any,
  String,
  match,
} from '@modern-js/runtime/bff';
import { hx } from '../common/_utils';

const GetInputSchema = {
  from: String,
};

const GetOutputSchema = Struct({
  params: Struct({
    id: String,
  }),
  cc: String,
  from: String,
  id: String,
});

export const get = match(
  {
    request: {
      query: GetInputSchema,
      params: {
        id: String,
      },
    },
    response: GetOutputSchema,
  },
  ({ params: { id }, query: { from } }) => {
    const cc = hx();
    const ctx = useContext();
    return { params: ctx.params, from, cc, id };
  },
);

const PostInputSchema = {
  name: String,
  phone: String,
};

const PostOutputSchema = Struct({
  id: String,
  name: String,
  phone: String,
});

export const post = match(
  {
    request: { params: { id: String }, data: PostInputSchema },
    response: PostOutputSchema,
  },
  ({ params: { id }, data }) => {
    return {
      id,
      name: data.name,
      phone: data.phone,
    };
  },
);
