import { icon } from './chooseIcon';
import { getResponse } from '../../api';

export const saveIcon = async (resResp) => {
  const authMess = 'Authenticated';

  const bodyIcon = {
    wordsPerDay: 10,
    optional: {
      icon: icon.iconURL,
      maxCardsPerDay: 10,
      soundAutoPlay: true,
      showDeleteBtn: true,
      showStrongBtn: true,
      showAnswerBtn: true,
      cardInfo: {
        translation: true,
        meaning: true,
        example: true,
        transcription: false,
        associationImg: false,
      },
    },
  };

  if (resResp.message === authMess) {
    const content = await getResponse(`users/${resResp.userId}/settings`, { method: 'PUT', body: JSON.stringify(bodyIcon) });
    if (content) {
      return true;
    }
  }
};
