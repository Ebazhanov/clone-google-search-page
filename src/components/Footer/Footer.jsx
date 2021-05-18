import { de } from '../../assets/translation/de.js';
import './Footer.css';

function Footer() {
  return (
    <div className="bottom-menu-container">
      <div className="bottom-menu-deutschland">
        <div className="land">{de.land}</div>
      </div>
      <div className="bottom-menu bottom-final-menu">
        <div className="bottom-menu left-menu-items">
          <div className="bottom-menu werbeprogramme">{de.advertising}</div>
          <div className="bottom-menu unternehmen">{de.business}</div>
          <div className="bottom-menu functioniert">{de.howSearchWorks}</div>
        </div>
        <div className="bottom-menu co2">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC"
            className="pic-co2"
            alt="pic"
          />
          <span>{de.co2}</span>
        </div>
        <div className="bottom-menu right-menu-items">
          <div className="bottom-menu datenschutz">{de.privacy}</div>
          <div className="bottom-menu nutzungs">{de.terms}</div>
          <div className="bottom-menu einstellungen">{de.settings}</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
