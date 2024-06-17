import React, { useContext, useState } from "react";

const MovieContext = React.createContext();

export function useMovie() {
    return useContext(MovieContext);
}

export default function MovieProvider({ children }) {
    const [movieList, setMovieList] = useState([]);

    return (
        <MovieContext.Provider value={{ movieList, setMovieList }}>
            {children}
        </MovieContext.Provider>
    )
}
