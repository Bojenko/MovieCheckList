import React, {FC} from 'react';
import MovieList from "./MovieList";
import {useDispatch, useSelector} from "react-redux";
type Movie = {
    name: string | null,
    picture: string | null
}


const ListPanel:FC = () => {
    const addMovieInStorage = (name: string, picpath: string) => {
        localStorage.setItem(name, picpath);
    }
    const getMovieArrayFromStorage = () => {
        const movies: Array<Movie> = [];

        for (let i = 0; i < localStorage.length; i++) {
            let path:string = isItNull(localStorage.key(i))
            movies[i] = {
                name: localStorage.key(i),
                picture: localStorage.getItem(path)
            };
        }
        return movies;
    }
    const isItNull = (arg:string|null)=>{
        let str:string = arg?.toString()===undefined ? "undefined" : arg?.toString();
        return str;
    }
    const dispatch = useDispatch();
    const movies = useSelector(state=>state.movies);
    return (
        <div>
            <MovieList list={getMovieArrayFromStorage()}/>
        </div>
    );
};

export default ListPanel;