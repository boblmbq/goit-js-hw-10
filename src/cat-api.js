import axios from 'axios';
import { refs } from './refs';

export function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds').catch(error => {
    console.log(error);
  });
}

export function fetchCatByBreed(breedId) {
  const parahms = new URLSearchParams({
    breed_ids: breedId,
  });

  return axios
    .get(`https://api.thecatapi.com/v1/images/search?${parahms}`)
    .catch(error => console.log(error));
}
