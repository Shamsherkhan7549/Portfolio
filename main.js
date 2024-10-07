
let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");



// menuIcon.addEventListener("click", () => {
//     if(navbar.style.right === '0px'){
//         navbar.style.right= '-160px';
//     }else{
//         navbar.style.right ='0px'
//     }
// })

let icon1 = document.querySelector(".navbar :nth-child(1)");
let icon2 = document.querySelector(".navbar :nth-child(2)");
let icon3 = document.querySelector(".navbar :nth-child(3)");
let icon4 = document.querySelector(".navbar :nth-child(4)");

menuIcon.addEventListener('click', () => {
    if(icon1.style.right === '2rem'){
        icon1.style.right = '-150px'
    }else{
        icon1.style.right = '2rem'
    }

    if(icon2.style.right === '2rem'){
        icon2.style.right = '-300px'
    }else{
        icon2.style.right = '2rem'
    }

    if(icon3.style.right === '2rem'){
        icon3.style.right = '-450px'
    }else{
        icon3.style.right = '2rem'
    }

    if(icon4.style.right === '2rem'){
        icon4.style.right = '-600px'
    }else{
        icon4.style.right = '2rem'
    }
});

let readBtn = document.querySelector('#read-btn');
let readMore = document.querySelector('.read-more')

readBtn.addEventListener('click', () => {
   if( readMore.style.display === "block"){
      readMore.style.display = "none"
   }else{
     readBtn.innerText = "Read less"
     readMore.style.display = "block"
   }
})