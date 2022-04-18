const addMovieModal = document.getElementById('add-modal');
const addMovieButton = document.querySelector('header button');
const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
};

addMovieButton.addEventListener('click', toggleMovieModal);