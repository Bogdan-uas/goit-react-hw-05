import { FaStar } from "react-icons/fa";

import css from './MovieDetails.module.css'

export default function MovieDetails({ movie }) {
    const baseURL = "https://image.tmdb.org/t/p/w500";

return (
    <div className={css.container}>
    <div className={css.wrap}>
        <img
        className={css.img}
        src={
            movie.backdrop_path
            ? `${baseURL}/${movie.backdrop_path}`
            : "https://plus.unsplash.com/premium_photo-1661675440353-6a6019c95bc7?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        />
    </div>
    <h3 className={css.title}>{movie.title}</h3>
    <div className={css.flexList}>
        <p className={css.description}>{movie.overview}</p>
        <p className={css.text}>Release date: {movie.release_date}</p>
        <p className={css.text}>Runtime: {movie.runtime}</p>
        <p className={css.text}>
        Rating: {movie.vote_average} <FaStar />
        </p>
        <div className={css.listWrapper}>
        <p className={css.text}>Genres:</p>
        <ul className={css.list}>
            {movie.genres.map((genre) => (
            <li key={genre.id} className={css.item}>
                <p className={css.genre}>{genre.name}</p>
            </li>
            ))}
        </ul>
        </div>
    </div>
    </div>
);
}