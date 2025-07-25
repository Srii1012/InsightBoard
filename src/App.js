import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ChartBuilder from './pages/ChartBuilder';
import VisualCharts from './pages/VisualCharts';
import Layout from './components/Layout';

const App = () => {
  return (
    // No <BrowserRouter> here! It should be in your index.js or main.jsx
    <Routes>
      {/* The login route does not have the sidebar */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />

      {/* Routes that include the sidebar and are wrapped by the Layout component */}
      <Route element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chart-builder" element={<ChartBuilder />} />
        <Route path="charts" element={<VisualCharts />} />
      </Route>
    </Routes>
  );
};

export default App;