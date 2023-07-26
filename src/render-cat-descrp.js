import { refs } from './refs';

export function renderCatInfo(data) {
  const { breeds, url } = data;
  const markup = `
  <div class="container">
    <img  width="${500}" src="${url}">
      <div class="descr-container">
        <h1>${breeds[0].name}</h1>
          <ul>
            <li>${breeds[0].description}</li>
            <li><b>Temperament:</b> ${breeds[0].temperament}</li>
          </ul>
      </div>
  </div>`;
  refs.selectEl.insertAdjacentHTML('afterend', markup);
}
