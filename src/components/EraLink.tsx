import { NavLink } from "react-router-dom";
import './EraButton.css';

type EraLinkProps = {
  name: string;
  color: string;
  to: string;
};

function EraLink({ name, color, to }: EraLinkProps) {
  return (
    <NavLink to={to} className="button">
      <span className="button_lg" style={{ color: color, borderColor: color, border: "2px solid" }}>
        <span className="button_sl" style={{ backgroundColor: color }}></span>
        <span className="button_text">{name}</span>
      </span>
    </NavLink>
  );
}

export default EraLink;