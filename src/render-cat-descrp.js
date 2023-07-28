import { refs } from './refs';

export function renderCatDescr(data) {
  console.log(data)
  const { breeds, url } = data;
  const markup = `
    <img  width="${500}" src="${url}">
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
