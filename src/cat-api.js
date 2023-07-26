import axios from 'axios';
import { giveResponse } from './render-option';

export function fetchBreeds() {
  axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => giveResponse(response))
    .catch(error => {
      console.log(error);
    });
}

export function fetchCatByBreed(breedId) {
  const parahms = new URLSearchParams({
    breed_ids: breedId,
  });

  return axios
    .get(`https://api.thecatapi.com/v1/images/search?${parahms}`)
    .then(response => response.data)
    .catch(error => console.log(error));
}