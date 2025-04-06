import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './AppLayout';
import AuthLayout from './AuthLayout';

import Dashboard from './assets/Pages/Dashboard';
import Orders from './assets/Pages/Orders';
import Products from './assets/Pages/Products';
import Reviews from './assets/Pages/Reviews';
import Complaints from './assets/Pages/Complaints';
import Profile from './assets/Pages/Profile';
import Settings from './assets/Pages/Settings';
import Signin from './assets/Pages/Auth/Signin';
import Signup from './assets/Pages/Auth/Signup';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence mode='wait'>
    <Router>
      <Routes>

        {/* Auth Pages */}
        <Route
          path="/logout"
          element={
            <AuthLayout>
              <Signin />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          }
        />
        <Route
          path="/signin"
          element={
            <AuthLayout>
              <Signin />
            </AuthLayout>
          }
        />

        {/* App Pages */}
        <Route
          path="/"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />
        <Route
          path="/orders"
          element={
            <AppLayout>
              <Orders />
            </AppLayout>
          }
        />
        <Route
          path="/products"
          element={
            <AppLayout>
              <Products />
            </AppLayout>
          }
        />
        <Route
          path="/reviews"
          element={
            <AppLayout>
              <Reviews />
            </AppLayout>
          }
        />
        <Route
          path="/complaints"
          element={
            <AppLayout>
              <Complaints />
            </AppLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <AppLayout>
              <Profile />
            </AppLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <AppLayout>
              <Settings />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
    </AnimatePresence>
  );
}

export default App;