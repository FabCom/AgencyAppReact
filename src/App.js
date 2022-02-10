
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home/index.jsx'
import About from "./pages/About/index.jsx";
import { Works } from "./pages/Works/index.jsx";
import { Navbar } from "./components/navbar/index.jsx";
import { Box } from "@mui/system";
import { ThemeContext } from "./ThemeContext.jsx";


export function App() {
  const Theme_Context = useContext(ThemeContext)

  const Theme =  React.useMemo( () => createTheme(Theme_Context[0]),[Theme_Context] )
  // console.log(Theme)

  return (


      <ThemeProvider theme={Theme}>
        <Router>            
          <Navbar/>
          <Box sx={{width: '100%', height: '92vh', backgroundColor: "background.paper"} }>
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/about'} element={<About />} />
              <Route path={'/works/:params'} element={<Works />} />
            </Routes>
          </Box> 
        </Router>
      </ThemeProvider>

  );
}

export default App;
