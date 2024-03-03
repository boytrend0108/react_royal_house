import { NavLink, useNavigate } from "react-router-dom";
import classNames from "classnames";

import './Controls.scss';
import { LayerItemType } from "../../types/LayerItem";
import { useEffect } from "react";

type Props = {
  buttons: LayerItemType[];
}
export const Controls: React.FC<Props> = ({ buttons }) => {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      console.log('navigate')
      navigate('..')
    }
  }, [])
  
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