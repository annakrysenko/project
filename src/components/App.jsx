import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';


export const App = () => {
  const [firstRenderEnded, setFirstRenderEnded] = useState(false);
  useEffect(() => {
    setFirstRenderEnded(true);
  }, []);


  return (
    firstRenderEnded && (
        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    )
    )
};