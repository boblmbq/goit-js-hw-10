import axios from 'axios';
import { loader } from './loader';
import { errorStart } from './error';

export function fetchBreeds() {
  loader();
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .catch(error => errorStart(error));
}

export function fetchCatByBreed(breedId) {
  loader();
  const parahms = new URLSearchParams({
    breed_ids: breedId,
  });

  return axios
    .get(`https://api.thecatapi.com/v1/images/search?${parahms}`)
    .catch(error => errorStart(error));
}
