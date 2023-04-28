
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




// let sendMessage = document.querySelector('button');
// let inputs = document.querySelectorAll('input');
// // let textArea = document.getElementById('text-area');
// sendMessage.addEventListener('click',() =>{
//   inputs.forEach(input => input.value ='');
//   // textArea.forEach(textarea => textArea.value='');
//   console.log('x')
// });


// var slideImg = document.getElementById('slideImg');

// var Images = new Array(
//   // "import/red-1.jpeg",
//   // "import/red-2.jpg",
//   // "import/red-3.png",
//   // "import/red-4.jpg",
//   // "import/red-5.jpg",
// );
    
// var len = Images.length;
// var i=0;
// function slider (){
//     console.log(i)
//     if(i>len-1){
//         i=0;
//     }
//     slideImg.src=Images[i];
//     i++;
//     setTimeout('slider()',3900);
// };