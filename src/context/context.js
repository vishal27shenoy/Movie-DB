import React, {createContext, useContext, useState} from 'react';

const MovieContext = createContext();

export function MovieContextProvider({children}) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upCommingMovies, setUpCommingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  return (
    <MovieContext.Provider
      value={{
        trendingMovies,
        setTrendingMovies,
        upCommingMovies,
        setUpCommingMovies,
        topRatedMovies,
        setTopRatedMovies,
      }}>
      {children}
    </MovieContext.Provider>
  );
};
export {MovieContext};
