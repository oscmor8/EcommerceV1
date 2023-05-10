
function navSlide(){
    const burger = document.querySelector(".burger-menu")
    const nav = document.querySelector(".nav-links")

    function showNavBar(){
        nav.classList.toggle("nav-activate")
    }
    burger.addEventListener("click", showNavBar);
}

navSlide()


// =============== Slides =============== //
// const imgs = document.getElementById("imgs")
// const img = document.querySelectorAll("#imgs img")


// let index = 0 



// function changeImage(){
//     if (index > img.length - 1){
//         index = 0
//     }else if(index < 0){
//         index = img.length - 1
//     }
// }

// function transformImage(){
//     imgs.style.transform = `translateX(${-index * 500}px)`
// }

// function slideLeft(){
//     index--
//     changeImage()
//     transformImage()
// }
// function slideRight(){
//     index++
//     changeImage()
//     transformImage()
// }





// ==========================bs

const slider = document.querySelector('.slider')

const leftArrow = document.querySelector('.arrow-left')
const rightArrow = document.querySelector('.arrow-right')

var sectionIndex = 0;

leftArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
});

rightArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
});


// ================ JSON REQUEST =================== // 

