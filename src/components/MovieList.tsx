import React, {FC} from 'react';
import MovieItem from "./MovieItem";
interface MovieListProps{
    list:Array<Movie>
}
type Movie = {
    name: string | null,
    picture: string | null
}
const MovieList:FC<MovieListProps> = (props) => {
    return (
        <div>
            {props.list.map((movie)=><MovieItem name={isItNull(movie.name)} picture={isItNull(movie.picture)}/>)}
        </div>
    );
};
const isItNull = (arg:string|null)=>{
    let str:string = arg?.toString()===undefined ? "undefined" : arg?.toString();
    return str;
}
export default MovieList;