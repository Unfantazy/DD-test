import React from "react";
import { NavLink } from "react-router-dom";
import s from './styles/navbar.module.css';

export function Navbar(){
    return (
        <nav className={s.menu}>
            <ul className={s.menuList}>
                <li className={s.menuItem}><NavLink to="/create" activeClassName={s.active}>Создание обращения</NavLink></li>
                <li className={s.menuItem}><NavLink to="/appeal" activeClassName={s.active}>Обращения</NavLink></li>
            </ul>
        </nav>
    )
}

