function initAccordion() {
  const accordionList = document.querySelectorAll('.menutitle');

  function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }
  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  });
}
initAccordion();

function initToggleArrow() {
  const menuSelect = document.querySelectorAll('.menutitle');

  function toggleArrow() {
    this.children[1].classList.toggle('ativo');
  }
  menuSelect.forEach((item) => {
    item.addEventListener('click', toggleArrow);
  });
}
initToggleArrow();
