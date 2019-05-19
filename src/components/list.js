import React, { useState } from 'react';
import * as moviesDB from '../movies-data.json';

const List = () => {
  // console.log(moviesDB.default);
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
      <div className="control">
        <input
          className="input"
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search Movies..."
        />
      </div>
      <br />
      <h2 className="subtitle">Search count : {movies.length}</h2>
      <table className="table is-striped is-hoverable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.idMovie}>
              <td>{movie.idMovie}</td>
              <td>{movie.c00}</td>
              <td>{movie.strPath}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default List;
