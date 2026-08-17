document.addEventListener("DOMContentLoaded", function () {
  const theme = localStorage.getItem("theme") || "dark"; // fallback para dark
  setTheme(theme);
});

function setTheme(theme) {
  const html = document.querySelector("html");
  const buttonDarkMode = document.getElementById("toggle-theme");

  switch (theme) {
    case "light":
      html.setAttribute("data-theme", "light");
      buttonDarkMode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f6cf09" viewBox="0 0 256 256"><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/></svg>';
      localStorage.setItem("theme", "light");
      break;
    case "dark":
      html.setAttribute("data-theme", "dark");
      buttonDarkMode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f6cf09" viewBox="0 0 256 256"><path d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"/></svg>';
      localStorage.setItem("theme", "dark");
      break;
    default:
      break;
  }
}

function toggleTheme() {
  const html = document.querySelector("html");
  const dataTheme = html.getAttribute("data-theme");
  if (dataTheme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}

function openMenuMobile(){
  const drawerMenu = document.querySelector(".drawerMenu");
  if(!drawerMenu) return;
  drawerMenu.classList.add("opened")
}

function closeMenuMobile(){
  const drawerMenu = document.querySelector(".drawerMenu");
  if(!drawerMenu) return;
  drawerMenu.classList.remove("opened")
}

document.querySelectorAll('.nav-links .nav-link').forEach(link => {
  link.addEventListener('click', closeMenuMobile);
});