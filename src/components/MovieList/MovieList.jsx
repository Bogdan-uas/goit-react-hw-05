import Movie from "../Movie/Movie.jsx";

import css from './MovieList.module.css'

export default function MovieList({ movies }) {
    return (
    <ul className={css.list}>
    {movies.map((movie) => {
        return (
        <li key={movie.id} className={css.item}>
            <Movie movie={movie} />
        </li>
        );
    })}
    </ul>
);
}