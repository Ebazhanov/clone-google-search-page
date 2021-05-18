import { ReactComponent as SeachIconSvg } from '../../assets/svg/search-icon.svg';
import { ReactComponent as MicrofonIconSvg } from '../../assets/svg/mic.svg';
import './SearchFiled.css';

function SearchFiled() {
  return (
    <div className="searchbox">
      <input type="text" maxLength="2048" autoFocus />
      <span className="search-icon">
        <SeachIconSvg />
      </span>
      <span className="microfon-icon">
        <MicrofonIconSvg />
      </span>
    </div>
  );
}

export default SearchFiled;
