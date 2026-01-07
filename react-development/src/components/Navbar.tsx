
import { useCountryContext } from '../context/CountryContext';

export const Navbar = () => {
  const { theme, setTheme } = useCountryContext();
  
  const isDark = theme === 'dark';
  const toggleDarkMode = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <nav className="navbar-container">
      <h2 className="title-name">Where in the world?</h2>
      <button 
        className="dark-mode-btn" 
        onClick={toggleDarkMode}
        aria-pressed={isDark}
      >
        {isDark ? (
          <>
            <i className="fa-solid fa-moon" aria-hidden="true"></i>
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <i className="fa-regular fa-moon" aria-hidden="true"></i>
            <span>Dark Mode</span>
          </>
        )}
      </button>
    </nav>
  );
};