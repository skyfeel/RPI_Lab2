
let slideIndex=1;

slideIndex=Number(localStorage.getItem("slideIndexStorage"));

document.addEventListener('keydown', function(e){
    switch(e.key){

        case "ArrowLeft":  
            minusSlide()
            break;
        case "ArrowRight": 
            plusSlide()
            break;
        case "Escape":
            let pane=document.querySelector(".pane");
            pane.remove();
            break;

    }
});

showSlides(slideIndex);


function plusSlide() {
    showSlides(slideIndex += 1);
}


function minusSlide() {
    showSlides(slideIndex -= 1);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("item");
    const dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    console.log(slideIndex);
    localStorage.setItem("slideIndexStorage",String(slideIndex));
}

