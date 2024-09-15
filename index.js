const menu = document.getElementById('menu');

if (menu) {
  menu.addEventListener('click', () => {
    const menuList = document.getElementsByClassName('menu-list')[0];
    const menu = document.getElementById('menu')
    if (menuList.classList.contains('open')) {
      menuList.classList.remove('open');
      menu.classList.remove('open');
      menuList.style.display = 'none';
    }
    else {
      menuList.classList.add('open');
      menu.classList.add('open');
      menuList.style.display = 'block';
    }
  });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const navbar = document.getElementsByTagName('nav')[0];
    const offset = navbar.offsetHeight + 30;
    const target = document.querySelector(this.getAttribute('href'));
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition - offset;
    
    window.scrollTo({
      top: startPosition + distance,
      behavior: 'smooth'
    });
  });
});