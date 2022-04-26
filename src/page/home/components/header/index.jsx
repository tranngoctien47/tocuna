import React, { useState } from 'react';
import s from './Header.module.scss'
import cn from "classnames";

import Logo from "assets/svg/logo.svg";
import { navList } from './helper'
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useLockedBody from 'core/useLockedBody';

const box = {
    display: 'flex',
    alignItems: 'center'
}
function Header() {
    const [open, setOpen] = useState(false)
    const HandleMenu = () => {
        setOpen(true)
    }
    const CloseMenu = () => {
        setOpen(false)
    }
    useLockedBody(open)

    return (
        <div>
            <div className={s.wrappers} >
                <Box className='container' sx={box}>
                    <div className={s['wrapper']}>
                        <div className={s['wrapper-content']}>
                            <img src={Logo} alt="" />
                            <nav>
                                <ul className={s["list-nav"]}>
                                    {navList.map(({ link, name }) => (
                                        <li key={`${name}`}>
                                            <Link to={link}>{name}</Link>
                                        </li>
                                    ))
                                    }
                                </ul>
                            </nav>
                        </div>
                        <div className={s['wrapper-button']}>
                            <button>Start Now!</button>
                        </div>
                        <div className={s.hamburger}>
                            {open ? <CloseIcon onClick={CloseMenu} /> : <MenuIcon onClick={HandleMenu} />}
                        </div>
                    </div>
                    <div className={cn(s['menu-moblie'], {
                        [s['menu-moblie-active']]: open
                    })}>
                        <ul>
                            {navList.map(({ link, name }) => (
                                <li key={`${name}`}>
                                    <Link to={link}>{name}</Link>
                                </li>
                            ))}
                            <li>    <button>Start Now!</button></li>
                        </ul>
                    </div>
                </Box>
            </div >
        </div >
    );
}

export default Header;