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
    // let { getFormattedTitle } = movie;
    console.log(otherProps);
    // same as movie.getFormattedTitle()
    // getFormattedTitle = getFormattedTitle.call(movie, ...arguments for this function);
    // getFormattedTitle = getFormattedTitle.apply(movie, [arguments for this function])
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = movie.getFormattedTitle() + ' - ';
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
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
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      // using getter and setter for validation things
      // without the set method _title will be read only
      set title(value) {
        if (value.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = value;
      },
      // without the get method _title will not be readable
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle() {
      // without "this" the method would search after an info variable outside this object
      return this.info.title.toUpperCase();
    }
  };

  newMovie.info.title = title;

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  // declaring searchMovieHandler with function() and not with arrow functions 'this' will be the button element
  // arrow functions binds 'this' to the global window object
  // console.log(this);
  const searchterm = document.getElementById('filter-title').value;
  renderMovies(searchterm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
