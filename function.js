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

// document.addEventListener("DOMContentLoaded", function () {
//   el_autohide = document.querySelector(".autohide");

//   // add padding-top to bady (if necessary)
//   navbar_height = document.querySelector(".navbar").offsetHeight;
//   // document.body.style.paddingTop = navbar_height + 'px';

//   if (el_autohide) {
//     var last_scroll_top = 0;
//     window.addEventListener("scroll", function () {
//       let scroll_top = window.scrollY;
//       if (scroll_top < last_scroll_top) {
//         el_autohide.classList.remove("scrolled-down");
//         el_autohide.classList.add("scrolled-up");
//       } else {
//         el_autohide.classList.remove("scrolled-up");
//         el_autohide.classList.add("scrolled-down");
//       }
//       last_scroll_top = scroll_top;
//     });
//     // window.addEventListener
//   }
//   // if
//   document.body.style.overflowX = "hidden";
//   // document.body.style.
// });

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

// var prevScrollpos = window.scrollY;
window.addEventListener("scroll", function () {
  el_autohide = document.querySelector(".autohide");
  var currentScrollPos = window.scrollY;
  if (currentScrollPos > 600) {
    el_autohide.classList.remove("scrolled-up");
    el_autohide.classList.add("scrolled-down");
  } else {
    el_autohide.classList.remove("scrolled-down");
    el_autohide.classList.add("scrolled-up");
  }
  // prevScrollpos = currentScrollPos;
});



document.addEventListener('DOMContentLoaded', function() {
        const wrapper = document.getElementById('autoScrollWrapper');
        const scrollAmount = 1; // Amount to scroll in pixels per interval
        const scrollInterval = 20; // Time in milliseconds for each scroll step (e.g., 20ms for smooth scroll)
        const pauseBeforeReverse = 2000; // Pause at the end before reversing (2 seconds)

        let scrollDirection = -1; // 1 for right, -1 for left
        let scrollTimer;

        function startScrolling() {
          console.log("scrolling");
            scrollTimer = setInterval(() => {
                if (scrollDirection === 1) {
                    wrapper.scrollLeft += scrollAmount;
                    // If scrolled to the end (or near end), reverse direction
                    if (wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth) {
                        clearInterval(scrollTimer);
                        setTimeout(() => {
                            scrollDirection = -1;
                            startScrolling();
                        }, pauseBeforeReverse);
                    }
                } else {
                    wrapper.scrollLeft -= scrollAmount;
                    // If scrolled to the beginning (or near beginning), reverse direction
                    if (wrapper.scrollLeft <= 0) {
                        clearInterval(scrollTimer);
                        setTimeout(() => {
                            scrollDirection = 1;
                            startScrolling();
                        }, pauseBeforeReverse);
                    }
                }
            }, scrollInterval);
        }

        // Start scrolling when the page loads
        startScrolling();

        // Optional: Pause scrolling on mouse hover and resume on mouse leave
        wrapper.addEventListener('mouseenter', () => {
            clearInterval(scrollTimer);
        });

        wrapper.addEventListener('mouseleave', () => {
            startScrolling();
        });
    });