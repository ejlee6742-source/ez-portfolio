import {createContext, useContext, useState}from "react";

//테마컨텍스트 생성
const ThemeContext = createContext()

export function ThemeProvider({children}){
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => setIsDarkMode((prev) => !prev);
    const themeStyle={
        backgroundColor: isDarkMode ? "blue" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
    }
    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme, themeStyle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    return useContext(ThemeContext);
}