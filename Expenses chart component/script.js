const monPrice = document.querySelector('.monPrice')
const tuePrice = document.querySelector('.tuePrice')
const wedPrice = document.querySelector('.wedPrice')
const thuPrice = document.querySelector('.thuPrice')
const friPrice = document.querySelector('.friPrice')
const satPrice = document.querySelector('.satPrice')
const sunPrice = document.querySelector('.sunPrice')
const monday = document.querySelector('.mon')
const tuesday = document.querySelector('.tue')
const wednesday = document.querySelector('.wed')
const thursday = document.querySelector('.thu')
const friday = document.querySelector('.fri')
const saturday = document.querySelector('.sat')
const sunday = document.querySelector('.sun')

monday.addEventListener("mouseover", function(){
    monday.style.opacity = "0.7";
    monPrice.style.display = "flex";
})
monday.addEventListener("mouseout", function(){
    monday.style.opacity = "1";
    monPrice.style.display = "none"
})

tuesday.addEventListener("mouseover", function(){
    tuesday.style.opacity = "0.7";
    tuePrice.style.display = "flex";
})
tuesday.addEventListener("mouseout", function(){
    tuesday.style.opacity = "1";
    tuePrice.style.display = "none"
})

wednesday.addEventListener("mouseover", function(){
    wednesday.style.opacity = "0.7";
    wedPrice.style.display = "flex";
})
wednesday.addEventListener("mouseout", function(){
    wednesday.style.opacity = "1";
    wedPrice.style.display = "none"
})

thursday.addEventListener("mouseover", function(){
    thursday.style.opacity = "0.7";
    thuPrice.style.display = "flex";
})
thursday.addEventListener("mouseout", function(){
    thursday.style.opacity = "1";
    thuPrice.style.display = "none"
})

friday.addEventListener("mouseover", function(){
    friday.style.opacity = "0.7";
    friPrice.style.display = "flex";
})
friday.addEventListener("mouseout", function(){
    friday.style.opacity = "1";
    friPrice.style.display = "none"
})

saturday.addEventListener("mouseover", function(){
    saturday.style.opacity = "0.7";
    satPrice.style.display = "flex";
})
saturday.addEventListener("mouseout", function(){
    saturday.style.opacity = "1";
    satPrice.style.display = "none"
})

sunday.addEventListener("mouseover", function(){
    sunday.style.opacity = "0.7";
    sunPrice.style.display = "flex";
})
sunday.addEventListener("mouseout", function(){
    sunday.style.opacity = "1";
    sunPrice.style.display = "none"
})

