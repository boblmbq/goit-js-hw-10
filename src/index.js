import axios from 'axios';
import { refs } from './refs';
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
import { renderCatInfo } from './render-cat-descrp';
axios.defaults.headers.common['x-api-key'] =
  'live_w8c6edlcYPnBeRSlJJPN3PwtN05kGsmn5nOlIGdV4ct5DIKv5IQEvswZXoRsQCOD';

fetchBreeds();

refs.selectEl.addEventListener('change', e =>
  fetchCatByBreed(e.target.value)
    .then(response => renderCatInfo(response[0]))
    .catch(error => console.log(error))
);
