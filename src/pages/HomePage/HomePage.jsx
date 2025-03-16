import { useState, useEffect } from "react";
import { fetchTrendMovies } from "../../movie-api.js";
import toast, { Toaster } from "react-hot-toast";
import SelectTime from "../../components/SelectTime/SelectTime.jsx";
import MovieList from "../../components/MovieList/MovieList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";

import css from './HomePage.module.css'

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [page, SetPage] = useState(1);
    const [time, setTime] = useState("week");
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
    const fetchData = async () => {
    try {
        setLoading(true);
        setError(false);
        const data = await fetchTrendMovies(time, page);
        if (data.results.length > 0) {
            setMovies((prevMovies) => [...prevMovies, ...data.results]);
        }
        setIsVisible(page < data.total_pages);
    } catch (error) {
        setError(error);
        toast.error("Whoops, something went wrong!");
    } finally {
        setLoading(false);
    }
    };
    fetchData();
}, [time, page]);

const onLoadMore = () => {
    SetPage((prevPage) => prevPage + 1);
};

const handleChangeTime = (value) => {
    setMovies([]);
    SetPage(1);
    setTime(value);
};

return (
    <div className={css.container}>
        <Toaster position="top-right" reverseOrder={false} />
        {error && <ErrorMessage />}
        <h2 className={css.main_homepage_title}>
        Top Movies of the:{" "}
        <SelectTime value={time} handleChangeTime={handleChangeTime} />
    </h2>
    {loading && <Loader />}
    <MovieList movies={movies} />
    {isVisible && !loading && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </div>
);
}

