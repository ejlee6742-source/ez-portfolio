import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

//contexts
import {ThemeProvider, useTheme} from './contexts/ThemeContext';

function AppContent(){
  const {themeStyle} = useTheme();
  const containerStyle = {
    backgroundColor:"#999",
    ...themeStyle
  }
  return(
    <main style={containerStyle}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about"  element={<About />}/>
        <Route path="/projects"  element={<Projects />}/>
        <Route path="/projects/:id" element={<ProjectDetail />}/>
      </Routes>
    </main>
  )
}
function App() {
  
  
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
          <AppContent />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
