import * as styles from './App.scss';
import {Home} from '../screens/Home';

export class App {

  constructor(options) {
    this.props = {
      dom: null,
      ...options
    };

    this.props.dom.innerHTML = 'Loading...';
  }

  render() {
    const main = document.createElement('main');
    main.classList.add(styles.App);

    main.innerHTML = new Home({title: 'home'}).render();

    this.props.dom.innerHTML = '';
    this.props.dom.appendChild(main);
  }
}
