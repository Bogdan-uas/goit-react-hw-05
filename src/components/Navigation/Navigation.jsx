import clsx from "clsx";
import { NavLink } from "react-router-dom";

import css from './Navigation.module.css'

export default function Navigation() {

return (
    <nav className={css.nav}>
    <NavLink to="/" className={css.button}>
        Home
    </NavLink>
    <NavLink to="/movies" className={css.button}>
        Movies
    </NavLink>
    </nav>
);
}