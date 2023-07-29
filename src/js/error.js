import { refs } from './refs';

export function errorStart(error) {
  console.log(error)
  refs.modalErrorEl.classList.remove('hidden');
  refs.catInfoEl.classList.add("hidden");
  refs.selectEl.classList.add("hidden");
  refs.loaderEl.classList.add("hidden")
  refs.btnReloadEl.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      refs.modalErrorEl.classList.add('hidden');
      location.reload();
    }
  });
}
