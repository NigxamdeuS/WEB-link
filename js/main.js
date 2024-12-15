$(function() {
    $('.openbtn').click(function() {
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('active');
    });
});

const slideInElements = document.querySelectorAll('.slide-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
});

slideInElements.forEach(element => {
  observer.observe(element);
});