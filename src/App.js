import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ChartBuilder from './pages/ChartBuilder';
import VisualCharts from './pages/VisualCharts';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chart-builder" element={<ChartBuilder />} />
      <Route path="/charts" element={<VisualCharts />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
