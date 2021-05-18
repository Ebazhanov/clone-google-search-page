import { ReactComponent as AllApps } from '../../assets/svg/all-apps.svg';
import { de } from '../../assets/translation/de.js';
import './Header.css';

function Header() {
  return (
    <div className="top-navigation-bar">
      <div className="left-menu">
        <div className="about-google">
          <a href="https://about.google/?fg=1&utm_source=google-DE&utm_medium=referral&utm_campaign=hp-header">
            {de.aboutGoogle}
          </a>
        </div>
        <div className="store">
          <a href="https://store.google.com/DE?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=de-DE">
            {de.store}
          </a>
        </div>
      </div>
      <div className="right-menu">
        <div className="gmail">
          <a href="https://mail.google.com/mail/u/0/?tab=rm">{de.gmail}</a>
        </div>
        <div className="images">
          <a href="https://www.google.de/imghp?hl=en-GB">{de.bilder}</a>
        </div>
        <div className="all-apps-icon">
          <AllApps />
        </div>
        <div className="photo">
          <a href="https://accounts.google.com/SignOutOptions?hl=de&continue=https://www.google.com/">
            <img src="https://i.ibb.co/gSjwgLM/me.jpg" alt="portrait" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
