import { globalUser } from '../../utils/main';
import createUser from '../../api/createUser';
import saveIcon from './saveIcon';
import logIn from '../signIn/login';

const signUp = async () => {
  const errorBlock = document.querySelector('.error-block-up');
  const nextButton = document.querySelector('.click-enter');

  const login = document.querySelector('[name="email"]').value;
  const pass = document.querySelector('[name="password-up"]').value;
  const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[+-_@$!%*?&#.,;:[\]{}]).{8,}$/;

  if (reg.test(pass)) {
    const user = { email: login, password: pass };

    globalUser.set('email', login);
    globalUser.set('password', pass);

    const success = await createUser(user);
    const logSuccess = await logIn(success);
    const iconSuccess = await saveIcon(logSuccess);
    if (iconSuccess) {
      nextButton.click();
    }
  } else {
    errorBlock.innerHTML = `
      <p> Password must be minimum: </p>
      <p>- 8 symbols; </p>
      <p>- one uppercase letter;</p>
      <p>- one lowercase letter;</p>
      <p>- one digital;</p>
      <p>- one special symbol;</p>
    `;
  }
};

export default signUp;