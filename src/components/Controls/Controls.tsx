import { NavLink } from "react-router-dom";
import classNames from "classnames";

import './Controls.scss';
import { LayerItemType } from "../../types/LayerItem";

type Props = {
  buttons: LayerItemType[];
}
export const Controls: React.FC<Props> = ({ buttons }) => {
  
  return (
    <div className="controls">
      <NavLink
        to="."
        className={({ isActive }) => classNames("controls__btn", {
          "controls__btn--active": isActive
        })}
      >
        All
      </NavLink>

      {buttons.map(button => (
        <NavLink
          to={`/${button}`}
          key={button}
          className={({ isActive }) => classNames("controls__btn", {
            "controls__btn--active": isActive
          })}
        >
          {button}
        </NavLink>)
      )}
    </div>
  );
}