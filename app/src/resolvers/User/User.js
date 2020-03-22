import { getUserIdFromRequest } from '../../utils/authentication/getUser';

const User = {
  email: {
    fragment: 'fragment userId on User { id }',
    resolve(parent, args, { request }) {

      const userId = getUserIdFromRequest(request, false);

      console.log(JSON.stringify(parent));

      if (userId && userId === parent.id) {

        return parent.email;

      }

      return null;

    }
  }
};

export { User as default };
