import css from './MovieReviewsList.module.css'

export default function MovieReviewsList({ reviews }) {
    return (
    <ul className={css.list}>
    {reviews.map((review) => {
        return (
        <li key={review.id} className={css.item}>
            <p className={css.list_text}>
            Author name: {review.author}. Rating:{" "}
            {review.author_details.rating}.
            </p>
            <p className={css.description}>{review.content}</p>
        </li>
        );
    })}
    </ul>
);
}