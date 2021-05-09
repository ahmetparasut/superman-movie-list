import React from 'react';
import {Link} from 'react-router-dom';
import s from './Navbar.module.css';


const Toolbar = () => (
    <nav className={s.navbar}>
        <Link className={s.appLogo} to='/'>
            Super Man Movies
        </Link>

        <ul className={s.navList}>
            <li className={s.navItem}>
                <Link className={s.navLink} to='/'>
                    Home
                </Link>
            </li>
            <li className={s.navItem}>
                <Link className={s.navLink} to='/about'>
                    About
                </Link>
            </li>
            <li className={s.navItem}>
                <Link className={s.navLink} to='/contact'>
                    Contact
                </Link>
            </li>
        </ul>
    </nav>
)

export default Toolbar;