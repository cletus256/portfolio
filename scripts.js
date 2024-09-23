var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display ="flex";
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display ="none";
}

// new Swiper('.card-wrapper', {
// loop: true,
// spaceBetween: 30,

// // If we need pagination
// pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     dynamicBullets: true
// },

// // Navigation arrows
// navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
// },

// breakpoints:{
//     0:{
//         slidesPerView:1
//     },
//     768:{
//         slidesPerView:2
//     },
//     1024:{
//         slidesPerView:3
//     }
// }

// });