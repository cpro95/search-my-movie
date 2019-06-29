import React, { useState } from 'react';
import * as moviesDB from '../movies-data.json';
import Header from '../components/header';
import { Link } from 'react-router-dom';

const List = () => {
  let totalMovies = moviesDB.default;
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState(totalMovies);

  const handleChange = e => {
    setSearch(e.target.value);
    var filteredMovies = totalMovies.filter(movie => {
      // console.log(movie.c00.indexOf(search));
      if (movie.c00.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)
        return true;
      else return false;
    });
    if (e.target.value.trim() !== '') setMovies(filteredMovies);
    else setMovies(totalMovies);
  };

  // conventionally submit handler
  // now It show instant search result

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     var filteredMovies = totalMovies.filter(movie => {
  //       if (movie.c00.toLowerCase().indexOf(search.toLowerCase()) !== -1)
  //         return true;
  //       else return false;
  //     });
  //     setMovies(filteredMovies);
  //     setSearch('');
  //   };

  return (
    <section>
      <Header />
      <div className="input-group input-group-sm mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          value={search}
          autoFocus
          onChange={handleChange}
          placeholder="Search Movies..."
        />
      </div>
      <h2 className="h5">Total : {movies.length}</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Rating / Premiered</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.idMovie}>
              <th scope="row">
                <Link
                  to={{
                    pathname: `/${movie.idMovie}`,
                    state: movie
                  }}
                >
                  {movie.idMovie}
                </Link>
              </th>
              <td>
                <Link
                  to={{
                    pathname: `/${movie.idMovie}`,
                    state: movie
                  }}
                >
                  {movie.c00}
                </Link>
              </td>
              <td>
                <Link
                  to={{
                    pathname: `/${movie.idMovie}`,
                    state: movie
                  }}
                >
                  <span className="badge badge-dark">
                    {parseFloat(movie.rating).toFixed(1)}
                  </span>
                  {' / '}
                  <span className="badge badge-secondary">
                    {movie.premiered}
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default List;
