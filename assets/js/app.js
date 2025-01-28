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



  // live chat

let chat_icon=document.querySelector(".chat_icon");
let chat_box=document.querySelector(".chat_box");
chat_icon.addEventListener("click",()=>{chat_box.classList.toggle("active");


});



let close_btn=document.querySelector(".close_btn");
close_btn.addEventListener("click", ()=> {
chat_box.classList.remove("active");

});

let send_btn = document.querySelector("#send_button");

send_btn.addEventListener("click", () => {
  let message_input = document.querySelector("#message_input");
  let message = message_input.value; // Correctly accessing the input value
  
  if (message === "") {
    return; // Prevent adding empty messages
  }

  let message_body = `
    <div class="sender d-flex mb-3 justify-content-left gap-2">
      <div class="author_img">
        <i class="fa-solid fa-user"></i>
      </div>
      <div class="message">
        <p>${message}</p> <!-- Correct template literal syntax -->
      </div>
    </div>`;

  let messages_wrapper = document.querySelector(".messages");
  messages_wrapper.innerHTML += message_body;
  message_input.value = ""; // Correctly resetting input field value
});

});




/****************************************************/



