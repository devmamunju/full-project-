document.addEventListener("DOMContentLoaded", () => {
  // TimeStampShow JS
  let timeStamp = document.querySelector(".timestamp");
  timeStamp.innerHTML = TimeStamp(false, false, true);
  setInterval(() => {
    timeStamp.innerHTML = TimeStamp(false, false, true);
  }, 1000);

  // Toggle JS
  let toggle_btn = document.getElementById("toggle_btn");
  toggle_btn.onclick = (e) => {
    let menu = document.querySelector(".my_navbar ul");
    menu.classList.toggle("active");
    let icon = document.querySelector(".toggle_btn .icon");

    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-bars-staggered");
      // icon.classList.add("fa-x");
    } else {
      icon.classList.remove("fa-bars-staggered");
      // icon.classList.remove("fa-x");
      icon.classList.add("fa-bars");
    }
  };

  // Header Sticky JS
  let header_bottom = document.querySelector(".header_bottom");
  let sticky_height = header_bottom.offsetTop + header_bottom.offsetHeight;
  window.addEventListener("scroll", () => {
    if (window.scrollY > sticky_height) {
      header_bottom.classList.add("active");
    } else {
      header_bottom.classList.remove("active");
    }
  });
});
