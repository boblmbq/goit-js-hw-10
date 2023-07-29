import { refs } from './refs';
import { loader } from './loader';
export function renderCatDescr(data) {
  loader();
  refs.catInfoEl.innerHTML = '';
  const { breeds, url } = data.data[0];
  const markup = `
  <div class="card-cont">
    <img class="cat-img" src="${url}">
  </div>
      <div class="descr-container">
        <h1>${breeds[0].name}</h1>
          <ul>
            <li>${breeds[0].description}</li>
            <li><b>Temperament:</b> ${breeds[0].temperament}</li>
          </ul>
      </div>
  `;
  refs.catInfoEl.insertAdjacentHTML('beforeend', markup);
}
