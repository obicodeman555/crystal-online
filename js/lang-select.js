const selectItems = document.querySelectorAll('.lang-select');
const langSelect = () => {

    selectItems.forEach(selectItem => {
    const inputField = selectItem.querySelector('#input-field');
    const icon = selectItem.querySelector('.icon-right');
    const ul = selectItem.querySelector('.select-item');

    inputField.addEventListener('click', (event) => {
      event.preventDefault()
      ul.classList.toggle('active');
      icon.classList.toggle('active');
    })
  })
}
langSelect();
