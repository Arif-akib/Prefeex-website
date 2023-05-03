
// prefeex navbar logo start

let scrollpos = window.scrollY

const prelogo = document.getElementById("prelogo")

const scrollChange = 1

const addClassOnScroll = () => prelogo.classList.add("scrol")
const removeClassOnScroll = () => prelogo.classList.remove("scrol")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;
    // console.log("Helllo", scrollpos)
  if (scrollpos >= scrollChange) { addClassOnScroll() }
  else removeClassOnScroll()
});

// prefeex navbar logo end

// dropdown start

let ham=document.getElementById('ham').addEventListener("click", () => {
  console.log("clicked")
  const dp = document.getElementById('dp');
  if(dp.classList == 'dropdown'){
    dp.classList = 'dropdown-block';
  }
  else{
    dp.classList = 'dropdown';
  }
});

// dropdown end

// dropdown navbar start

document.addEventListener('click', function outside(event) {
  const dp = document.getElementById('dp');
  const ham=document.getElementById('ham');
  console.log("x")
  if (!ham.contains(event.target)) {
    dp.classList = 'dropdown';
  }
});

// dropdown navbar end

// client slider start

let cContainer=document.getElementById('cContainer');
let cItem=document.getElementsByClassName('c-item');
setInterval(function next(){cContainer.append(cItem[0])},1000);
// document.getElementById("cItem").style.animation = "cItem 4s 2";

// client slider end


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay:{
    delay:1000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});