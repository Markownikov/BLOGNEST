import React from 'react';
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';  
import LightModeIcon from '@mui/icons-material/LightMode';  
import logo from './BlogNest.jpg';

const Component = styled(AppBar)(({ theme, darkMode }) => ({
    background: darkMode ? '#333' : '#FFFFFF',
    color: darkMode ? '#FFFFFF' : 'black',
}));

const Logo = styled('img')({
    height: 50,
    marginRight: 20,
});

const Container = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;

const NavLinks = styled('div')`
    display: flex;
    align-items: center;
    & > a {
        padding: 20px;
        color: inherit;  // Make sure links inherit the color from the AppBar
        text-decoration: none;
    }
`;

const Header = ({ toggleDarkMode, darkMode }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

    const logout = async () => navigate('/account');
        
    return (
        <Component darkMode={darkMode}>
            <Container>
                <NavLinks>
                    <Link to='/' style={{ textDecoration: 'none', marginRight: 20 }}>HOME</Link>
                    <Link to='/about' style={{ textDecoration: 'none', marginRight: 20 }}>ABOUT</Link>
                    <Link to='/contact' style={{ textDecoration: 'none', marginRight: 20 }}>CONTACT</Link>
                    <Link to='/whyblog' style={{ textDecoration: 'none' }}>WHY BLOG ?</Link>
                </NavLinks>
                <Link to='/'>
                    <Logo src={logo} alt="Logo" />
                </Link>
                {!isAuthPage && (
                    <div>
                        <Button color="inherit" onClick={toggleDarkMode}>
                            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </Button>
                        <Button color="inherit" onClick={logout}>LOGOUT</Button>
                    </div>
                )}
            </Container>
        </Component>
    );
}

export default Header;
