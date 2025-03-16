import { Link } from "react-router-dom";

import css from './NotFoundPage.module.css'

export default function NotFoundPage() {
    return (
    <div>
    <Link to="/" className={css.button}>
        Home Page
    </Link>
        <h2 className={css.title}>🥺Sorry, this page not found...🥺</h2>
    </div>
);
}