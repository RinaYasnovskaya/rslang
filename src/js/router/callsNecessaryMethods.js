/**
  * в switch каждый забирает свой кейс, чтобы не пушить пустые болванки.
  * в нем пишет те функции, которые вызываются у него на странице.
  * список кейсов:
  * case '/main': {}
  * case '/main/settings': {}
  * case '/main/learning': {}
  * case '/main/method-interval': {}
  * case '/main/english-puzzle': {}
  * case '/main/speak-it': {}
  * case '/main/sprint': {}
  * case '/main/listening': {}
  * case '/main/savannah': {}
  * case '/main/constructor': {}
  * case '/vocabulary': {}
  * case '/statistic': {}
  * case '/about-us': {}
  */

import { controlForm, submitForm, chooseIcon } from '../form';

export const callsNecessaryMethods = (path) => {
  switch (path) {
    case '/': {
      break;
    }
    case '/auth': {
      controlForm();
      submitForm();
      chooseIcon();
      break;
    }
    default: {
      return 'default';
    }
  }
};
