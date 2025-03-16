import css from './MovieCreditItem.module.css'

export default function MovieCreditItem({ cast }) {
    const baseURL = "https://image.tmdb.org/t/p/w500";

return (
    <div className={css.container}>
    <div className={css.wrap}>
        <img
        className={css.img}
        src={
            cast.profile_path
            ? `${baseURL}/${cast.profile_path}`
            : "https://t4.ftcdn.net/jpg/03/01/15/23/360_F_301152308_gGcWIIui6sUjrM5iGZJIHypC1qHGj0XG.jpg"
        }
        />
    </div>
    <h3 className={css.cast_title}>{cast.name}</h3>
    </div>
);
}