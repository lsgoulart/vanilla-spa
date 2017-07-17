import * as styles from './Home.scss';

export class Home {
  constructor (props) {
    this.props = props;
    document.title = 'Home';
  }

  render () {
    return (
      `<section class="${styles.section}">
        <h1 class="${styles.title}">Hello</h1>
      </section>`
    );
  }
}