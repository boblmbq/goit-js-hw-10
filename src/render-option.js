import { refs } from './refs';

export function giveResponse(response) {
  const renderedOptions = response.data.map(
    e => `<option value="${e.id}">${e.name}</option>`
  );
  refs.selectEl.insertAdjacentHTML('beforeend', renderedOptions);
}
