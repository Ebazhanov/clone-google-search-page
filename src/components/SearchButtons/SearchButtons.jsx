import './SearchButtons.css';
import { de } from '../../assets/translation/de.js';

function SearchButtons() {
  return (
    <div className="container_buttons">
      <div className="google_search button_search">
        <a href="https://www.google.de/">{de.googleSearch}</a>
      </div>
      <div className="feeling_lucky button_search">
        <a href="https://www.google.de/">{de.feelingLucky}</a>
      </div>
    </div>
  );
}

export default SearchButtons;
