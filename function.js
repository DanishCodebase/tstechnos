const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_hpbhnef";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Your message has been sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  el_autohide = document.querySelector(".autohide");

  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector(".navbar").offsetHeight;
  // document.body.style.paddingTop = navbar_height + 'px';

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if
});

let s = 0;
function show() {
  let e = document.getElementsByClassName("hide");
  for (let t = 0; t < e.length; t++) e[t].style.display = "none";
  ++s > e.length && (s = 1),
    (e[s - 1].style.display = "block"),
    setTimeout(show, 1200);
}

show();

document.getElementById("developer").addEventListener("click", () => {
  document.querySelector(".form").classList.toggle("di-none");
  
});

document.querySelector(".container-close").addEventListener("click", () => {
  document.querySelector(".form").classList.toggle("di-none");
});