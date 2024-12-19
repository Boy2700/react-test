import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CounterAppState from './components/count-app-state';
import CounterAppReducer from './components/count-app-reducer';
import ThemeToggleApp from './components/theme-toggle-app';
import LiftingStateUp from './components/lifting-state-up';
import TodoApp from './components/todo-app';
import FormControl from './components/control-form';
import UserProfileCard from './components/user-profile-card';

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar Navigation */}
        <div style={{ width: '200px', background: '#282c34', color: '#fff', padding: '20px' }}>
          <h2 style={{ textAlign: 'left' }}>My Project List</h2>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link to="/" style={linkStyle}>Count App UseState</Link>
            <Link to="/count-app-reducer" style={linkStyle}>Counter App Reducer</Link>
            <Link to="/theme-toggle-app" style={linkStyle}>Theme Toggle App</Link>
            <Link to="/lifting-state-up" style={linkStyle}>Lifting State Up</Link>
            <Link to="/todo-app" style={linkStyle}>Todo App</Link>
            <Link to="/control-form" style={linkStyle}>Form Control</Link>
            <Link to="/user-profile-card" style={linkStyle}>User Profile Card</Link>
          </nav>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<CounterAppState />} />
            <Route path="/count-app-reducer" element={<CounterAppReducer />} />
            <Route path="/theme-toggle-app" element={<ThemeToggleApp />} />
            <Route path="/lifting-state-up" element={<LiftingStateUp/>} />
            <Route path="/todo-app" element={<TodoApp />} />
            <Route path="/control-form" element={<FormControl />} />
            <Route path="/user-profile-card" element={<UserProfileCard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Styling for Links
const linkStyle = {
  textDecoration: 'none',
  color: '#61dafb',
  padding: '10px',
  borderRadius: '5px',
  background: '#20232a',
  textAlign: 'center',
};

export default App;
