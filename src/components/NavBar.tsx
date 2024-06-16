import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  return (
    <>
    <nav>
        <ul>
            <li><NavLink to="/self-titled">Self Titled</NavLink></li>
            <li><NavLink to="/regional-at-best">Regional At Best</NavLink></li>
            <li><NavLink to="/vessel">Vessel</NavLink></li>
            <li><NavLink to="/blurryface">Blurryface</NavLink></li>
            <li><NavLink to="/trench">Trench</NavLink></li>
            <li><NavLink to="/scaled-and-icy">Scaled and Icy</NavLink></li>
            <li><NavLink to="/clancy">Clancy</NavLink></li>
        </ul>
    </nav>
    </>
  );
}

export default NavBar;