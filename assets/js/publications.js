'use strict';
const papers = [...document.querySelectorAll('[data-publication]')];
const groups = [...document.querySelectorAll('[data-year-group]')];
const filters = [...document.querySelectorAll('[data-filter]')];
const search = document.querySelector('#publication-search');
let category = 'all';
function update() {
  const query = search.value.trim().toLowerCase();
  let count = 0;
  for (const paper of papers) {
    const matches = (category === 'all' || paper.dataset.category === category) && paper.textContent.toLowerCase().includes(query);
    paper.hidden = !matches;
    count += Number(matches);
  }
  for (const group of groups) group.hidden = ![...group.querySelectorAll('[data-publication]')].some(paper => !paper.hidden);
  document.querySelector('#no-results').hidden = count !== 0;
  document.querySelector('#filter-status').textContent = `Showing ${count} publication${count === 1 ? '' : 's'}`;
}
for (const button of filters) button.addEventListener('click', () => {
  category = button.dataset.filter;
  for (const filter of filters) {const active = filter === button; filter.classList.toggle('active', active); filter.setAttribute('aria-pressed', String(active));}
  update();
});
search.addEventListener('input', update);
