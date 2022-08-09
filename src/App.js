import { Suspense } from 'react';
import {Canvas} from '@react-three/fiber';
import './App.css';
import FirstScene from './Components/FirstScene';


function App() {

  return (
    <div style={{width: '100%', height: '100vh'}}>
    <Canvas shadows>
<Suspense fallback={null}>
    <FirstScene />
    </Suspense>
    </Canvas>
    </div>
  );
}

export default App;
