const addMovieModal = document.getElementById('add-modal');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const addMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};
const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};
const backdropClickHandler = () => {
  toggleMovieModal();
};
const cancelAddMovie = () => {
  toggleMovieModal();
};

addMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);