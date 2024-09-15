const menu = document.getElementById('menu');

if (menu) {
  menu.addEventListener('click', () => {
    const menuList = document.getElementsByClassName('menu-list')[0];
    if (menuList.classList.contains('open')) {
      menuList.classList.remove('open');
    //   menuList.style.display = 'none';
    }
    else {
      menuList.classList.add('open');
    //   menuList.style.display = 'block';
    }
  });
}