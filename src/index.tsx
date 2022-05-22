import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

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
type Movie = {
    name: string | null,
    picture: string | null
}
const defaultState = {
    movies:getMovieArrayFromStorage()
}
type action = {
    type:string,
    payload:string
}
const reducer = (state:any, action:action)=>{
    return state;
}
const store = createStore(reducer);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
