import { schema as normalizrSchema } from 'normalizr';

export const schema = new normalizrSchema.Entity('posts', {}, {
  idAttribute: entity => entity.data.id,
  processStrategy: value => value.data,
});
export const schemasArray = new normalizrSchema.Array(schema);
