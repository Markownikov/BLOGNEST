// Assuming you have useState and useDarkMode imported and set up
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import DataProvider from './context/DataProvider';
import Header from './components/header/Header';  // Import your Header component
import Home from './components/home/Home';
import CreatePost from './components/create/CreatePost';
import DetailView from './components/details/DetailView';
import Update from './components/create/Update';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import WhyBlog from './components/whyblog/WhyBlog';
import Login from './components/account/Login';
import useDarkMode from './components/ThemeSwitcher/useDarkMode';  // Import your custom hook for dark mode

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? (
    <>
      {/* Pass toggleDarkMode and darkMode props to Header */}
      <Header toggleDarkMode={props.toggleDarkMode} darkMode={props.darkMode} />
      <Outlet />
    </>
  ) : (
    <Navigate replace to='/account' />
  );
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  const [darkMode, toggleDarkMode] = useDarkMode();  // Using your custom hook for dark mode

  return (
    <DataProvider>
      <BrowserRouter>
        <Box style={{ marginTop: 64, backgroundColor: darkMode ? '#121212' : '#fff', color: darkMode ? '#fff' : '#000' }}>
          <Routes>
            <Route path='/account' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}>
              <Route path='/' element={<Home />} />
            </Route>
            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}>
              <Route path='/create' element={<CreatePost />} />
            </Route>
            <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}>
              <Route path='/details/:id' element={<DetailView />} />
            </Route>
            <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}>
              <Route path='/update/:id' element={<Update />} />
            </Route>
            <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}>
              <Route path='/about' element={<About />} />
            </Route>
            <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}>
              <Route path='/contact' element={<Contact />} />
            </Route>
            <Route path='/whyblog' element={<PrivateRoute isAuthenticated={isAuthenticated} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}>
              <Route path='/whyblog' element={<WhyBlog />} />
            </Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
