const app = () => {
  const handle = (e) => {
    const target = e.target;
    const targetContentId = target.dataset.bsTarget;
    const content = document.querySelector(targetContentId);
    content.classList.toggle('active');
    console.dir(target.control.checked);
    target.innerHTML =  target.control.checked ? 'Показать больше информации &#9660;'  : 'Скрыть информацию &#9650;';
  }
  const toggleButtons = document.querySelectorAll('[data-bs-target]');
  console.log(toggleButtons);
  toggleButtons.forEach((button) => {
    button.addEventListener('click', handle);
  });
}

app();