import MovieCreditItem from "../../components/MovieCreditItem/MovieCreditItem.jsx";

import css from './MovieCreditsList.module.css'

export default function MovieCreditsList({ casts }) {
    return (
    <ul className={css.list}>
    {casts.map((cast) => {
        return (
        <li key={cast.id} className={css.item}>
            <MovieCreditItem cast={cast} />
        </li>
        );
    })}
    </ul>
);
}