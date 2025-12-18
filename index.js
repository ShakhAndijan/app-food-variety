const icons = document.querySelectorAll('.section-1-icons i');
let i = 0;

setInterval(() => {
  const currentIcon = document.querySelector('.section-1-icons .change');
  if (currentIcon) currentIcon.classList.remove('change');

  i++;
  if (i >= icons.length) {
    i = 0;
  }

  icons[i].classList.add('change');
}, 4000);
