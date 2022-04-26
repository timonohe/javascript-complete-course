const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');
  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';

  const filteredMovie = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovie.forEach((movie) => {
    const movieEl = document.createElement('li');

    // Checking for property existance (same as movie.info !== undefined)
    // if ('info' in movie) { }

    // object destructuring
    const { info, ...otherProps } = movie;
    // object desturcturing with using another variable name than the object property name
    // const { title: movieTitle } = info;
    // const { getFormattedTitle } = movie;
    console.log(otherProps);
    let text = movie.getFormattedTitle() + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        text += `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle: function() {
      // without "this" the method would search after an info variable outside this object
      return this.info.title.toUpperCase();
    }
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const searchterm = document.getElementById('filter-title').value;
  renderMovies(searchterm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
