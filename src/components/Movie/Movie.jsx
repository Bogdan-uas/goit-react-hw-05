import { Link, useLocation } from "react-router-dom";
import css from './Movie.module.css'

export default function Movie({ movie }) {
    const location = useLocation();
    const baseURL = "https://image.tmdb.org/t/p/w500";
    return (
    <div className={css.container}>
    <div className={css.wrapper}>
        <img
            className={css.img}
            src={
            movie.backdrop_path
            ? `${baseURL}/${movie.backdrop_path}`
            : "https://plus.unsplash.com/premium_photo-1661675440353-6a6019c95bc7?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        />
    </div>
    <Link
        to={`/movies/${movie.id}`}
        state={{ from: location }}
        className={css.Link}
    >
        <h3 className={css.title}>{movie.title}</h3>
    </Link>
    </div>
);
}