document.addEventListener("DOMContentLoaded", () => {
  console.log("THEME SCRIPT RUNNING");

  const body = document.body;
  const lightBtn = document.getElementById("lightBtn");
  const darkBtn = document.getElementById("darkBtn");
  const bullets = document.querySelectorAll("nav img");
 
  function setLightTheme() {
    body.dataset.theme = "light";

    lightBtn.style.background = "white";
    lightBtn.style.color = "black";
    lightBtn.style.border = "2px solid #F5F5F5";

    darkBtn.style.background = "black";
    darkBtn.style.color = "white";
    darkBtn.style.border = "2px solid #444"; 

    bullets.forEach(b => b.src = "assests/bullet.png");

    localStorage.setItem("theme", "light");
  }

  function setDarkTheme() {
    body.dataset.theme = "dark";

    darkBtn.style.background = "black";
    darkBtn.style.color = "white";
    darkBtn.style.border = "2px solid #444";

    lightBtn.style.background = "white";
    lightBtn.style.color = "black";
    lightBtn.style.border = "2px solid #888"; 

    bullets.forEach(b => b.src = "assests/bullet white.png");

    localStorage.setItem("theme", "dark");
  }

  lightBtn.addEventListener("click", setLightTheme);
  darkBtn.addEventListener("click", setDarkTheme);

  localStorage.getItem("theme") === "dark"
    ? setDarkTheme()
    : setLightTheme();
});
