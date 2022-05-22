import React from 'react';
import './App.css';
import MovieList from "./components/ListPanel"
import ListPanel from "./components/ListPanel";

type Movie = {
    name: string | null,
    picture: string | null
}


function App() {
    return (
        <div className="App">
            <ListPanel/>
        </div>
    );
}


export default App;
