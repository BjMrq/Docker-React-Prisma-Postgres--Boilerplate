import 'cross-fetch/polyfill';
import bcrypt from 'bcryptjs';
import ApolloBoost, { gql } from 'apollo-boost';
import db from '../src/db';

const client = new ApolloBoost({ uri: 'http://localhost:4000' });

beforeEach(async () => {

  await db.mutation.deleteManyUsers();
  const user = await db.mutation.createUser({
    data: {
      name    : 'Jen',
      email   : 'jen@example.com',
      password: bcrypt.hashSync('Red098!@#$')
    }
  });

});

test('Should create a new user', async () => {

  const createUser = gql`
        mutation {
            createUser(
                data: {
                    name: "Testuser",
                    email: "test@email.com",
                    password: "superpassword123"
                }
            ){
                token,
                user {
                    id
                }
            }
        }
    `;

  const response = await client.mutate({ mutation: createUser });

  const exists = await db.exists.User({ id: response.data.createUser.user.id });

  expect(exists).toBe(true);

});
