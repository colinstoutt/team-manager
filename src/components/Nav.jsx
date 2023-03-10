import "../scss/Nav.scss";
import { Link, useNavigate } from "react-router-dom";
import Roster from "../pages/Roster";
import Schedule from "../pages/Schedule";
import Recruitment from "../pages/Recruitment";

const Nav = ({ team }) => {
  return (
    <div className="nav">
      <div className="nav__main-links">
        {team ? (
          <Link to="/edit-team">
            <img className="nav__logo" src={team.logo_url} alt={team.mascot} />
          </Link>
        ) : (
          <div></div>
        )}
        <Link className="nav__link" to="/">
          {team ? (
            <span>
              {team.city} {team.mascot}
            </span>
          ) : (
            <div>Team Summary</div>
          )}
        </Link>
        <Link className="nav__link" to="/roster">
          <span>Roster</span>
        </Link>
        <Link className="nav__link" to="/schedule">
          <span>Schedule</span>
        </Link>
        <Link className="nav__link" to="/recruitment">
          <span>Recruitment</span>
        </Link>
        <Link to="/login">
          <span className="nav__logout nav__link">Sign Out</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
