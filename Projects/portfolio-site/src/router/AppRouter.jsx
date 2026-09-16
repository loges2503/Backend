import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Future routes can be added here */}
    </Routes>
  );
}

export default AppRouter;
