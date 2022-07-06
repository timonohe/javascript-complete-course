class PlaceFinder {
  constructor() {
    const adressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler);
    adressForm.addEventListener('submit', this.findAdressHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert('Location feature is not available in your browser - please use a more modern browser or manually enter an address.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      successResult => {
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude
        };
        console.log(coordinates);
      },
      error => {
        alert('Could not locate you unfortunately. Please enter an address manually!');
      }
    );
  }

  findAdressHandler() {

  }
}

new PlaceFinder();