import { useEffect, useState } from 'react';

export default function useDarkMode(): [boolean, () => void] {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    // if (isDark) localStorage.setItem('isDark', 'false');
    // else localStorage.setItem('isDark', 'true');
  };

  useEffect(() => {
    const isDark = localStorage.getItem('isDark');
    if (isDark !== null) setIsDark(Boolean(isDark));
  }, []);

  return [isDark, toggleDark];
}
