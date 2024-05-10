import './App.css';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
