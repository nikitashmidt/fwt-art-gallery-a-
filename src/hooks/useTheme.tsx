import { createContext, useContext, useState, useMemo } from "react";

const examination = localStorage.getItem("isDark") === 'true' ? true : false;

interface IAppContext  {
  isDark: boolean,
  setIsDark?: any,
};

const ThemeContext = createContext<IAppContext>(
  { isDark: examination }
);
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(examination);
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);
  
  localStorage.setItem("isDark", isDark ? 'true' : 'false');
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => {
    const value = useContext(ThemeContext);
    return value;
};
export default useTheme;