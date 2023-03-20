const sliderPicture = document.querySelector(".slider__img picture");
const sliderImg = sliderPicture.querySelector("img");
const sliderTitle = document.querySelector(".slider__content__description__title");
const sliderPara = document.querySelector(".slider__content__description__para");
let imageCount = 1;


const sliderContent = {
    contentOne:{
        title:"Family Gathering",
        para:`We love catering for entire families. So please bring everyone along for a special meal with your
             loved ones. We’ll provide a memorable experience for all.`
    },

    contentTwo:{
        title:"Special Events",
        para: ` Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you.
        We’ll be sure to mark your special date with an unforgettable meal.`,
    },

    contentThree:{
        title:"Social Events",
        para:  `Are you looking to have a larger social event? No problem! We’re more than happy to cater for big
        parties. We’ll work with you to make your event a hit with everyone.`,
    }
}

function effect(sourceEl){
    sliderPicture.classList.toggle("fade-in");
    setTimeout(()=>{
        countImage(sourceEl);
        sliderPicture.classList.toggle("fade-in");
    },1000)
}

function toggler(elementId){
    const headline = document.querySelector(`.slider__content__headline__text--${elementId}`);
    headline.classList.toggle("text-pop")
}


toggler("one");
function countImage(sourceEl){
    imageCount++;
    if(imageCount === 1){
        toggler("three")
        sourceEl.srcset = image.familyGathering;
        sliderImg.src = image.familyGathering;
        sliderTitle.innerText = sliderContent.contentOne.title;
        sliderPara.innerText = sliderContent.contentOne.para;
        toggler("one");
    }
    if(imageCount === 2){
        toggler("one")
        sourceEl.srcset = image.socialEvent;
        sliderImg.src = image.socialEvent;
        sliderTitle.innerText = sliderContent.contentTwo.title;
        sliderPara.innerText = sliderContent.contentTwo.para;
        toggler("two")
    }
    if(imageCount >= 3){
        toggler("two");
        sourceEl.srcset = image.specialEvent;
        sliderImg.src = image.specialEvent;
        sliderTitle.innerText = sliderContent.contentThree.title;
        sliderPara.innerText = sliderContent.contentThree.para;
        toggler("three")
        imageCount = 0;
    }
   
}



let imageSize ={
    size:undefined   
} 

let image = {
    familyGathering:`./starter-code/images/homepage/family-gathering-${imageSize.size}.jpg`,
    socialEvent: `./starter-code/images/homepage/social-events-${imageSize.size}.jpg`,
    specialEvent:`./starter-code/images/homepage/special-events-${imageSize.size}.jpg`
}

function updateImage() {
    image = {
      familyGathering: `./starter-code/images/homepage/family-gathering-${imageSize.size}.jpg`,
      socialEvent: `./starter-code/images/homepage/social-events-${imageSize.size}.jpg`,
      specialEvent: `./starter-code/images/homepage/special-events-${imageSize.size}.jpg`
    };
}

let currentWidth;


setInterval(()=>{
    currentWidth = window.innerWidth;
},200)
       
            
let interval = setInterval(()=>{

    let sourceEl;
    
    if(currentWidth >= 320 && currentWidth < 678){
        imageSize.size = "mobile";
        updateImage();
        console.log( "imagesize :" +imageSize.size);
        sourceEl = document.querySelector(".source__mobile");
        console.log(sourceEl);
    }
            
    if(currentWidth >= 678 && currentWidth < 1024){
        imageSize.size = "tablet";
        updateImage();
        sourceEl = document.querySelector(".source__tablet");
    }
        
    if(currentWidth >= 1024){
        imageSize.size = "desktop";
        updateImage();
        sourceEl = document.querySelector(".source__desktop");
    }
    effect(sourceEl);

},5000)



