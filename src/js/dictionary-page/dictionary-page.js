import { renderLayout } from './renderLayout';
import { renderWordsData } from './renderWordsData';
import { addEventListnersDictionary } from './addEventListnersDictionary';

export const renderDictionaryPage = () => {
  document.querySelector('#root').innerHTML = renderLayout();
  renderWordsData();
  addEventListnersDictionary();
};
