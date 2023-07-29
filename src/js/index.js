import axios from 'axios';
import { refs } from './refs';
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
import { renderCatDescr } from './render-cat-descrp';
import { giveResponse } from './render-option';
import { errorStart } from './error';
axios.defaults.headers.common['x-api-key'] =
  'live_w8c6edlcYPnBeRSlJJPN3PwtN05kGsmn5nOlIGdV4ct5DIKv5IQEvswZXoRsQCOD';

fetchBreeds().then(giveResponse);

refs.selectEl.addEventListener('change', e => {
  fetchCatByBreed(e.target.value)
    .then(renderCatDescr)
    .catch(error => errorStart(error));
});
