function showMenu() {
  const menu = document.querySelector('.menu-overlay')
  menu.classList.toggle('active')
}

function changeTheme() {
  const html = document.getElementById('html')
  const innerTheme = document.querySelector('.active-theme')
  const themeIcon = document.querySelector('.theme-icon')

  html.classList.toggle('dark')

  if (html.classList.contains('dark')) {
    innerTheme.innerHTML = 'escura'
    themeIcon.className = 'theme-icon fas fa-moon'
  } else {
    innerTheme.innerHTML = 'claro'
    themeIcon.className = 'theme-icon fas fa-sun'
  }
}