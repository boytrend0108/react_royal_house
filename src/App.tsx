
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './App.scss';
import { LayerItemType } from './types/LayerItem';
import { Controls } from './components/Controls/Controls';
import { LayerItem } from './components/LayerItem/LayerItem';

const LAYERS: LayerItemType[] = [
  LayerItemType.basewall,
  LayerItemType.insulation,
  LayerItemType.clinker,
  LayerItemType.windows,
  LayerItemType.facade,
];


function App() {
  console.log('render app')
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/')
  }, []);

  return (
    <div className="box">
      <h1>Клінкерний фасад</h1>

      <div className="layers">
        {LAYERS.map((img, i) => (
          <LayerItem key={img} image={img} delay={0.3 * i} />
        ))}
      </div>

      <Controls buttons={LAYERS} />
    </div>
  )
}

export default App
