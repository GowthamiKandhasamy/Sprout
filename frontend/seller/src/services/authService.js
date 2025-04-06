const API = 'http://localhost:5000/api';

const login = async (email, password) => {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

const getCurrentUser = async (token) => {
  const res = await fetch(`${API}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
};

const authService = { login, getCurrentUser };
export default authService;