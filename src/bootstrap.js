import './theme/theme.scss';

import {App} from './App';

const main = () => {
  document.title = 'Loading...';

  const app = new App({
    dom: document.querySelector('body')
  });

  app.render();
};

document.addEventListener('DOMContentLoaded', main);
