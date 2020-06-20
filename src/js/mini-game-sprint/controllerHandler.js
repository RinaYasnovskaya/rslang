// eslint-disable-next-line import/named
import { rightChoice, wrongChoice } from './yourСhoice';

const controllerHandler = (wordId, translateID) => {
  const wrongBtn = document.getElementById('wrong-btn');
  const rightBtn = document.getElementById('right-btn');

  wrongBtn.onclick = () => ((wordId !== translateID) ? rightChoice() : wrongChoice());
  rightBtn.onclick = () => ((wordId === translateID) ? rightChoice() : wrongChoice());
};

export default controllerHandler;
