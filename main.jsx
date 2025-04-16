import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AdminLogin = () => <h2>Admin Login</h2>;
const ClientLogin = () => <h2>Client Login</h2>;
const AdminDashboard = () => <h2>Admin Dashboard</h2>;
const ClientDashboard = () => <h2>Client Dashboard</h2>;

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/client/login" element={<ClientLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/client/dashboard" element={<ClientDashboard />} />
    </Routes>
  </BrowserRouter>
);