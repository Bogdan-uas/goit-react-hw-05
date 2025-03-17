import { FaStar } from "react-icons/fa";

import css from './MovieReviewsList.module.css'

export default function MovieReviewsList({ reviews }) {
    return (
    <ul className={css.list}>
    {reviews.map((review) => {
        return (
        <li key={review.id} className={css.item}>
            <p className={css.list_text}>
            Author's name: {review.author}
            <span>
            Rating:
            {review.author_details.rating > 0 ?
            " "  + review.author_details.rating :
            " " + "No rating"
            } <FaStar />
            </span>
            </p>
            <p className={css.description}>{review.content}</p>
        </li>
        );
    })}
    </ul>
);
}