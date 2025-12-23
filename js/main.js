// toggle links show 

let toggleBtn = document.querySelector(".toggle-menu")
let hiddenSection = document.querySelector(".header-sections")


toggleBtn.addEventListener("click", (e) => {
    hiddenSection.classList.toggle("hidden-section");
})


// Skill Loading Function

let element = document.querySelectorAll(".skill-view div span");

window.onscroll = function () {
    if (window.scrollY >= 800) {
        for (let i = 0; i < element.length; i++) {
            element[i].style.setProperty('--afterDisplay', 'visible');
        }
    }
}



// Gallery Pop-Up function

let images = document.querySelectorAll(".gallery-img img");
let overlay = document.querySelector(".popupoverlay");
let popUp = document.querySelector(".pop-up");
let popupImg = document.querySelector(".pop-up img");
let spanAlt = document.querySelector(".alt-span h2");
let popClose = document.querySelector(".pop-btn");



images.forEach((el) => {
    el.onclick = function () {
        popupImg.src = el.src;
        spanAlt.textContent = el.alt;
        overlay.style.cssText = "display: block";
        popUp.style.cssText = "display: flex";
    }
    popClose.onclick = function () {
        overlay.style.cssText = "display: none";
        popUp.style.cssText = "display: none";
    }
})




// color change selector

let colorOptions = document.querySelectorAll(".color-select input")
let colorOptionsLb = document.querySelectorAll(".color-select label");
let mainHtml = document.querySelector("html");

colorOptions.forEach((e) => {
    e.onclick = function () {
        let color = e.getAttribute('data-color');
        console.log(color)
        mainHtml.style.setProperty('--accent-color', color);
        window.localStorage.setItem(`--accent-color`, color)
        colorOptionsLb.forEach((el) => {
            el.classList.remove("active");
        })
        e.nextElementSibling.classList.add('active');
    }
});


// background image change

let imgArray = ["imgs/01.jpg", "imgs/02.jpg", "imgs/03.jpg", "imgs/04.jpg", "imgs/05.jpg", "imgs/06.png", "imgs/07.jpg", "imgs/08.jpg", "imgs/09.jpg", "imgs/10.jpg"]

let intervalId = null;
let backgroundImg = document.querySelector(".header .container");


let i = 0;


function startSlider() {
    if (intervalId !== null) return;

    intervalId = setInterval(() => {
        backgroundImg.style.backgroundImage = `url(${imgArray[i]})`;
        i++;

        if (i === imgArray.length) {
            i = 0;
        }
    }, 3000);
    window.localStorage.setItem(`background-Slider`, "true");
}


function stopSlider() {
    clearInterval(intervalId);
    intervalId = null;
    window.localStorage.setItem(`background-Slider`, "false");
}






let randomBg = document.querySelector(".bg-random .yes");
let fixedBg = document.querySelector(".bg-random .no");
let randomBgLb = document.querySelector(".yes-random-label");
let fixedBgLb = document.querySelector(".no-random-label");



// Random Background Enable

randomBg.onclick = function () {
    startSlider();
    randomBgLb.classList.add("active");
    fixedBgLb.classList.remove("active");
};


fixedBg.onclick = function () {
    randomBgLb.classList.remove("active");
    fixedBgLb.classList.add("active");
    stopSlider();
};


// sections-btns show

let showBtn = document.querySelector(".show-bullets .yes");
let hideBtn = document.querySelector(".show-bullets .no");
let showBtnLb = document.querySelector(".yes-show-label");
let hideBtnLb = document.querySelector(".no-show-label");
let SectionBtns = document.querySelector(".sections-btns");



showBtn.onclick = function () {
    SectionBtns.style.display = "flex"
    showBtnLb.classList.add("active");
    hideBtnLb.classList.remove("active");
    window.localStorage.setItem(`show-btn`, "true");
}

hideBtn.onclick = function () {
    SectionBtns.style.display = "none";
    showBtnLb.classList.remove("active");
    hideBtnLb.classList.add("active");
    window.localStorage.setItem(`show-btn`, "false");
}



// Local Storage Settings
window.onload = function () {
    let bgSlider = window.localStorage.getItem("background-Slider");
    if (bgSlider === "true") {
        startSlider();
        randomBgLb.classList.add("active");
        fixedBgLb.classList.remove("active");
    } else {
        stopSlider();
        randomBgLb.classList.remove("active");
        fixedBgLb.classList.add("active");
    }


    let showBtnLS = window.localStorage.getItem("show-btn");
    if (showBtnLS === "true") {
        SectionBtns.style.display = "flex";
        showBtnLb.classList.add("active");
        hideBtnLb.classList.remove("active");
    } else {
        SectionBtns.style.display = "none";
        showBtnLb.classList.remove("active");
        hideBtnLb.classList.add("active");
    }


    // Color Selector
    mainHtml.style.setProperty('--accent-color', `${window.localStorage.getItem(`--accent-color`)}`);
    let colorInner = window.localStorage.getItem(`--accent-color`);
    let activeLb = document.querySelector(`[data-color="${colorInner}"]`);
    colorOptions.forEach((e) => {
        colorOptionsLb.forEach((el) => {
            el.classList.remove("active");
        })
    });
    activeLb.nextElementSibling.classList.add('active');
}





// Reset Option

let resetOption = document.querySelector(".reset-option");

resetOption.onclick = function () {
    mainHtml.style.setProperty('--accent-color', `#FF9800`);
    colorOptionsLb.forEach((el) => {
        el.classList.remove("active");
    })
    colorOptionsLb[0].classList.add("active");


    SectionBtns.style.display = "flex";


    if (fixedBgLb.classList.contains("active")) {
        randomBgLb.classList.add("active");
        fixedBgLb.classList.remove("active");
    }


    if (hideBtnLb.classList.contains("active")) {
        showBtnLb.classList.add("active");
        hideBtnLb.classList.remove("active");
    }


    window.localStorage.setItem(`--accent-color`, `#FF9800`)
    window.localStorage.setItem(`show-btn`, "true");
    startSlider();


}
