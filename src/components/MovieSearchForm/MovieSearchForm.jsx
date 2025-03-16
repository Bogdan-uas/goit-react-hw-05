import toast from "react-hot-toast";
import { IoSearch } from "react-icons/io5";

import css from './MovieSearchForm.module.css'

export default function MovieSearchForm({ onSearch }) {
    const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const result = form.elements.query.value.trim();
    if (result === "") {
        toast.error("Please, enter search params!");
        onSearch("");
    }

    onSearch(result);
    form.reset();
};

return (
    <form className={css.form} onSubmit={handleSubmit}>
    <input
        type="text"
        name="query"
        className={css.input}
        required
        autoFocus
        placeholder="Search..."
    />
    <button className={css.button} type="submit" title="Search">
        <IoSearch />
    </button>
    </form>
);
}