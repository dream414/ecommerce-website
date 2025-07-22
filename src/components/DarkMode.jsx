import { useState, useEffect } from 'react';

function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => {
    setIsDark(!isDark);
  };

  // Body background color change directly using JS
  useEffect(() => {
    const body = document.body;
   
    if (isDark) {
      body.style.backgroundColor = '#111'; // Dark mode color
      body.style.color = '#fff';           // Text white
    } else {
      
      body.style.backgroundColor = '#fff'; // Light mode color
      body.style.color = '#000';           // Text black
    }
  }, [isDark]);

  return (
    <div
      onClick={toggleMode}
      className="h-20 w-20 flex items-center justify-center rounded-xl  cursor-pointer"
    >
      {isDark ? (
        <img src="./light.png" alt="Light Mode" className="h-12" />
      ) : (
        <img src="./dark.png" alt="Dark Mode" className="h-12" />
      )}
    </div>
  );
}

export default DarkMode;
