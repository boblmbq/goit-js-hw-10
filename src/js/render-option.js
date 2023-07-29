import { loader } from './loader';
import { refs } from './refs';
import SlimSelect from 'slim-select';

export function giveResponse(response) {
  const renderedOptions = response.data.map(
    e => `<option value="${e.id}">${e.name}</option>`
  );

  refs.selectEl.insertAdjacentHTML('beforeend', renderedOptions);
  new SlimSelect({
    select: refs.selectEl,
    settings: {
      showSearch: false,
    },
  });
  loader();
}
