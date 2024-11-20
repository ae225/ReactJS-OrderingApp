import React from "react";

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <div className="text-center mt-4">
      <button
        className="btn btn-secondary theme-toggle-btn"
        onClick={toggleTheme}
      >
        Toggle Dark/Light Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
