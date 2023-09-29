let tabs=document.querySelectorAll(".tabs div")
let tabContents=document.querySelectorAll(".content div")

let BMWImg=document.getElementById('BMWImg');
let LamboImg=document.getElementById('LamboImg');
let FerrariImg=document.getElementById('FerrariImg');
let sliderContainer=document.querySelectorAll('.slider-container');
let currentIndex=0;
let bmwImgs=[
    "https://bmwguide.ru/wp-content/uploads/2016/07/30-years-of-bmw-3-series-f30-06.jpg",
    "https://bmwguide.ru/wp-content/uploads/2016/07/bmw-at-2016-consorso-d-eleganza-bmw-2002-hommage-15.jpg",
    "https://ivanglazunov.ru/wp-content/uploads/f/e/1/fe173a4ba4ac2ba6bf1d2af7d60cbbb1.jpeg",
];
let LamboImgs=[
    "https://w.forfun.com/fetch/0f/0f054e31834817202b4a72d97c06284e.jpeg",
    "https://a.d-cd.net/IhAAAgC50-A-1920.jpg",
    "http://psihoman.ru/uploads/posts/2022-01/1643623123_2.jpg",
];
let FerrariImgs=[
    "https://hdpic.club/uploads/posts/2021-12/1639302894_1-hdpic-club-p-ferrari-kartinki-2.jpg",
    "https://foto.carexpert.ru/img/foto1680/ferrari/ferf8031.jpg",
    "http://cdn.motorpage.ru/Photos/orig/115CE.jpg",
];


function goToSlide(){
    
    if(currentIndex<0){
        currentIndex=bmwImgs.length-1;
    }
    else if(currentIndex>=bmwImgs.length){
        currentIndex=0;
    }
    BMWImg.src=bmwImgs[currentIndex];
    LamboImg.src=LamboImgs[currentIndex];
    FerrariImg.src=FerrariImgs[currentIndex];
}

//left arrow button
document.getElementById('prevBtnBmw').addEventListener('click',()=>{
    currentIndex--;
    goToSlide();
});
document.getElementById('prevBtnLambo').addEventListener('click',()=>{
    currentIndex--;
    goToSlide();
});
document.getElementById('prevBtnFerrari').addEventListener('click',()=>{
    currentIndex--;
    goToSlide();
});
//right arrow button
document.getElementById('nextBtnBmw').addEventListener('click',()=>{
    currentIndex++;
    goToSlide();
});
document.getElementById('nextBtnLambo').addEventListener('click',()=>{
    currentIndex++;
    goToSlide();
});document.getElementById('nextBtnFerrari').addEventListener('click',()=>{
    currentIndex++;
    goToSlide();
});

let autoPlayInterval=setInterval(()=>{
    currentIndex++;
    goToSlide();
},3000);

sliderContainer.forEach((e)=>{
    e.addEventListener('mouseenter',()=>{
    clearInterval(autoPlayInterval);
})
});
sliderContainer.forEach((e)=>{
    e.addEventListener('mouseleave',()=>{
        autoPlayInterval=setInterval(()=>{
            currentIndex++;
            goToSlide();
        },3000);
    });
})

tabs.forEach((element)=>{
    element.addEventListener("click",function(e){
        let tabId=e.target.getAttribute("data-index");
        let activeElemet=document.querySelector(".active");
        activeElemet.classList.remove("active");
        e.target.classList.add("active");

        let activeContent=document.querySelector(".show"); 
        activeContent.classList.remove("show");
        tabContents.forEach((content)=>{
            if(content.getAttribute("data-index")==tabId){
                content.classList.add("show");
            }
        })
    })
})