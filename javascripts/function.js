let themeBTN = document.querySelector(".moon_sun")
let theme_done = document.querySelector(".theme")

themeBTN.onclick = () => {
  var setTheme = theme_done

  setTheme.classList.toggle("dark_moon")

  var theme;

  if (setTheme.classList.contains('dark_moon')) {
    console.log("DARK MODE");
    theme = "DARK";
  } else {
    console.log("LIGHT MODE");
    theme = "LIGHT";
  }

  localStorage.setItem("PageTheme", JSON.stringify(theme));
}
let GETTheme = JSON.parse(localStorage.getItem("PageTheme"))

if (GETTheme === "DARK") {
  theme_done.classList.add("dark_moon")
}

// END THEME MODE

// ACCARDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}





// TABLE SEARCH
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}



// PLAYLIST
let playlists = document.querySelectorAll('.playlist .details_info')
let mainVideo = document.querySelector(".main_video iframe")

playlists.forEach(iframe => {
  iframe.onclick = () => {
    playlists.forEach(func => func.classList.remove('active_video_play'))
    iframe.classList.add("active_video_play")
    if (iframe.classList.contains("active_video_play")) {
      let src = iframe.children[0].getAttribute('src');
      mainVideo.src = src;
    }
  }
})

// SCROLL TOP ABOVE
document.body.classList.remove("remove-scrolling");
let mybutton = document.getElementById("scrollTop");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// FORM POPUP

let body = document.querySelector("body")

let xmark = document.querySelector(".xmark")
let form_qabul = document.querySelector("#form_qabul")
let form_qabul_in = document.querySelectorAll("#form_qabul input")
let form_link = document.querySelectorAll(".form_link")

form_link.forEach(btn => {
  btn.onclick = () => {
    form_qabul.classList.add("actived_form_qabul")
    body.style.overflow = "hidden"
  }
})
xmark.onclick = () => {
  form_qabul_in.forEach(inp_v => {
    inp_v.value = ""
  })
  form_qabul.classList.remove("actived_form_qabul")
  body.style.overflow = "auto"
}

let xmark1 = document.querySelector(".xmark1")
let contact_us = document.querySelector("#contact_us")
let contact_inp = document.querySelectorAll("#contact_us input")
let contact_btn = document.querySelectorAll(".contact_btn")



contact_btn.forEach(btn1 => {
  btn1.onclick = () => {
    contact_us.classList.add("actived_form_contact_us")
    body.style.overflow = "hidden"
  }
})

xmark1.onclick = () => {
  contact_inp.forEach(ip_v => {
    ip_v.value = ""
  })
  contact_us.classList.remove("actived_form_contact_us")
  body.style.overflow = "auto"
}



function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};