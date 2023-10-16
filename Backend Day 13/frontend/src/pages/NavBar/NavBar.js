import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Added faUserCircle
import "../../assets/css/NavBar.css";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../Redux/Userslice';

function NavBar() {
    const [click, setClick] = useState(false);
    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const user = useSelector(selectUser);
    const loggedIn = user.loggedIn;
    const dispatch = useDispatch();

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setOpenDrawer(open);
    };

    const handlejobClick = () => {
        navigate('/job');
        toggleDrawer(false);
    };

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <NavLink exact to="/" className="nav-logo">
                        LittleGarden
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}>
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}>
                                ABOUT
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}>
                                CONTACT
                            </NavLink>
                        </li>
                        {loggedIn ? (
                            <li className="nav-item">
                                <NavLink
                                    exact to="/login"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={() => dispatch(logout())}
                                >
                                    Logout
                                </NavLink>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <NavLink
                                        exact to="/login"
                                        activeClassName="active"
                                        className="nav-links"
                                        onClick={handleClick}
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        exact to="/register"
                                        activeClassName="active"
                                        className="nav-links"
                                        onClick={handleClick}
                                    >
                                        Signup
                                    </NavLink>
                                </li>
                            </>
                        )}

                       <Link to="/profile"> <div className="profile-icon">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </div></Link>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} />
                    </div>
                    <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
                        <div style={{ width: '250px', marginTop: "50px" }}>
                            <List>
                                <Link to="/dashboard"><ListItem button onClick={toggleDrawer(false)}>
                                    <ListItemText activeClassName="active" style={{ textDecoration: "none" }}
                                        primary="Dashboard" />
                                </ListItem></Link>
                                <Link to="/guides"><ListItem button onClick={toggleDrawer(false)}>
                                    <ListItemText activeClassName="active" style={{ textDecoration: "none" }}
                                        primary="Growing Guides" />
                                </ListItem></Link>
                                <Link to="/prepare"><ListItem button onClick={handlejobClick}>
                                    <ListItemText activeClassName="active" style={{ textDecoration: "none" }}
                                        primary="Prepare Your Garden" />
                                </ListItem></Link>

                                <Link to="/structure"> <ListItem button onClick={toggleDrawer(false)}>
                                    <ListItemText activeClassName="active" style={{ textDecoration: "none" }}
                                        primary="Garden Design" />
                                </ListItem></Link>
                                <Link to="/season"> <ListItem button onClick={toggleDrawer(false)}>
                                    <ListItemText activeClassName="active" style={{ textDecoration: "none" }}
                                        primary="Resource" />
                                </ListItem></Link>
                                <Link to="/maintain"> <ListItem button onClick={toggleDrawer(false)}>
                                    <ListItemText activeClassName="active" style={{ textDecoration: "none" }}
                                        primary="Maintain Garden" />
                                </ListItem></Link>
                                <Link to="/addplant"><ListItem button onClick={toggleDrawer(false)}>
                                    <ListItemText activeClassName="active" style={{ textDecoration: "none" }}
                                        primary="Add Plant" />
                                </ListItem></Link>
                                <Link to="/journal"><ListItem button onClick={toggleDrawer(false)}>
                                    <ListItemText activeClassName="active" style={{ textDecoration: "none" }}
                                        primary="Plant Journal" />
                                </ListItem></Link>
                                <Link to="/faq"><ListItem button onClick={toggleDrawer(false)}>
                                    <ListItemText activeClassName="active" style={{ textDecoration: "none" }}
                                        primary="FAQ" />
                                </ListItem></Link>
                                <Link to="/login"><ListItem button onClick={toggleDrawer(false)}>
                                    <ListItemText activeClassName="active" style={{ textDecoration: "none" }}
                                        primary="Log Out" />
                                </ListItem></Link>

                            </List>
                        </div>
                    </Drawer>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
