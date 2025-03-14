import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

import { AppWrapper } from './App.css';

const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;