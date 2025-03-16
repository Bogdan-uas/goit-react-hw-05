import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";
import MovieList from "../../components/MovieList/MovieList.jsx";
import { fetchMoviesByQuery } from "../../movie-api.js";
import MovieSearchForm from "../../components/MovieSearchForm/MovieSearchForm.jsx";

import css from './MoviesPage.module.css'

export default function MoviesPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [movies, setMovies] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("query");

useEffect(() => {
    if (!searchQuery) return;
    const fetchData = async () => {
    try {
        setLoading(true);
        setError(false);
        const data = await fetchMoviesByQuery(searchQuery, page);
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setIsVisible(page < data.total_pages);
    } catch (error) {
        setError(error);
        toast.error("Whoops, something went wrong!");
    } finally {
        setLoading(false);
    }
    };
    fetchData();
}, [searchQuery, page]);

const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
};

const onSearch = (value) => {
    setMovies([]);
    setIsEmpty(true);
    setPage(1);
    setSearchParams({ query: value });
};

return (
    <div className={css.container}>
    <p className={css.text}>Enter movie title</p>
    <MovieSearchForm onSearch={onSearch} />
    {loading && <Loader />}
    <Toaster position="top-right" reverseOrder={false} />
    {error && <ErrorMessage />}
    {movies.length > 0 && <MovieList movies={movies} />}
    {isVisible && !loading && <LoadMoreBtn onLoadMore={onLoadMore} />}
    {isEmpty && !loading && movies.length < 1 && (
        <p className={css.how_unfortunate_text}>Sorry, but there are no results</p>
    )}
    </div>
);
}