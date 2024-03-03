import { useLocation } from 'react-router-dom';
import { LayerItemType } from '../../types/LayerItem';
import './LayerItem.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

type Props = {
  image: LayerItemType;
  delay: number,
}

export const LayerItem: React.FC<Props> = ({ image, delay }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { pathname } = useLocation();
  const isActive =
    pathname.includes(image) && pathname !== '/';
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000)
  }, [])

  return (
    <div 
      className={classNames("layer-item", {
        "layer-item--active": isActive,
        "layer-item--hidden": !isActive && (pathname !== '/'),
      })}>
      <div
        className={classNames('layer-item__imbbox', {
          'layer-item__imbbox--loaded': isLoaded
        })}

        style={{
          transitionDelay: `${delay}s`,
        }}
      >
        <img
          src={`images/${image}.png`}
          alt="Несуча стіна"
          className='layer-item__img'
        />
      </div>
    </div>
  );
};
