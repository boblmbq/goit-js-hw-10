import { refs } from './refs';
export function loader() {
  refs.loaderEl.classList.toggle('hidden');
  refs.catInfoEl.classList.toggle('hidden');
  refs.selectEl.classList.toggle('hidden');
}
