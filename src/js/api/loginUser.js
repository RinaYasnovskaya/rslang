import getResponse from './getResponse';
import saveUser from '../utils/saveUser';
import { globalUser } from '../utils/main';

const loginUser = async (user) => {
  const parse = JSON.stringify(user);
  const content = await getResponse('signin', 'POST', { body: parse });

  globalUser.set('token', content.token);
  globalUser.set('userId', content.userId);
  saveUser();
};

export default loginUser;
