"use client"
import { useState } from 'react';
import Relative from './pages/relative';
import './App.css'

const App = () => {

  const [showAddRelative, setAddRelative] = useState(false);

  const handleEvent = () => {
    setAddRelative(true)
  };

  return (
    <>
      <div>
        <div className='add-btn-div'>
          <button onClick={handleEvent} className="btn-Add-Relative">
            ADD RELATIVE
          </button>
        </div>
        {!!showAddRelative && <Relative />}
      </div>

    </>
  );
};

export default App;
