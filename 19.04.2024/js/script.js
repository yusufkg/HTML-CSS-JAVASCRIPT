function showMenu(menuId) {
    // Tüm menüleri gizle
    var menus = document.querySelectorAll('.content');
    menus.forEach(function(menu) {
      menu.style.display = 'none';
    });
    
    // Belirli menüyü göster
    var menu = document.getElementById(menuId);
    if (menu) {
      menu.style.display = 'block';
    }
  }
  