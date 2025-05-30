const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_6wjcvuh";
  const templateID = "template_jythw5u";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      showMesage("success")
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

function showMesage(status) {
  var statusArray = {
    "success": "message-box-success",
    "error": "message-box-error",
    "warning": "message-box-warning"
  };

  // Get the specific class name based on the status
  const className = statusArray[status];

  // Check if a valid class name was found
  if (className) {
    // Select the message box element.
    // Assuming your message box HTML looks something like this:
    // <div id="myMessageBox" class="message-box di-none">Message content</div>
    // Or if you want to select by the specific status class itself:
    const messageBox = document.querySelector(`.${className}`); // Select by the class name
     const form = document.querySelector(".form");

    if (messageBox) {
      // 1. Show the message box by removing the "di-none" class
      form.classList.add("di-none");
      messageBox.classList.remove("di-none");
      console.log("message box displayed")


      // 2. Set a timeout to hide it after 3 seconds
      setTimeout(() => {
        messageBox.classList.add("di-none"); // Add "di-none" to hide it again
      }, 3000); // 3000 milliseconds = 3 seconds
      console.log("message box hidden");
    } else {
      console.error(`Error: Message box with class ".${className}" not found.`);
    }
  } else {
    console.warn(`Warning: Status "${status}" not recognized.`);
  }
}

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

const developerButtons = document.getElementsByClassName("developer");

for (let i = 0; i < developerButtons.length; i++) {
  developerButtons[i].addEventListener("click", () => {
    document.querySelector(".form").classList.toggle("di-none");
  });
}

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
          // console.log("scrolling");
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