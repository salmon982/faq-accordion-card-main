const arrowIcons = document.querySelectorAll('.arrow-icon');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

arrowIcons.forEach(arrow => {
  arrow.addEventListener("click", (e) => {
    arrow.previousElementSibling.classList.toggle("bold");
    arrow.classList.toggle("rotate");
    arrow.parentElement.nextElementSibling.classList.toggle("open");
  });
});