import React, { useState, createContext, useContext } from 'react';

// Create a Theme Context
const ThemeContext = createContext();

// ThemeProvider to manage theme state
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// App Component with Theme Toggle
const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Theme Toggle App</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: theme === 'light' ? 'ash' : 'none',
          color: theme === 'light' ? '#fff' : '#000',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

// Main Component
const ThemeToggleApp = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default ThemeToggleApp;
