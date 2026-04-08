(function () {
  'use strict';

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (!href || href === '#') {
        return;
      }
      var target = document.querySelector(href);
      if (!target) {
        return;
      }
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  window.addEventListener('scroll', function () {
    var current = '';
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(function (section) {
      var id = section.getAttribute('id');
      if (!id) {
        return;
      }
      var sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  });

  document.querySelectorAll('.project-card, .exp-card, .skill-category').forEach(function (el) {
    el.style.opacity = '0';
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
})();
