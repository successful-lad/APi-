import { schema as normalizrSchema } from 'normalizr';

export const schema = new normalizrSchema.Entity('todo', {}, {
  idAttribute: entity => entity.name,
});
export const schemasArray = new normalizrSchema.Array(schema);
