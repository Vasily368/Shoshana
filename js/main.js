
//////////слайдер/////////

new Swiper ('.slider-container',{

    slidesPerView: 2,
    spaceBetween: 30,


    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    }

    ,
    
});




///////////////////////////анимация


const logo = document.querySelector('.logo')
const headNav = document.querySelectorAll('.nav__list-link')
const headTitle = document.querySelector('.header__title')
const headText = document.querySelectorAll('.header__text')
const headLink = document.querySelector('.header__link')

const babyTitle = document.querySelector('.baby-title')
const babyTopText = document.querySelectorAll('.baby__text-top')
const babyText = document.querySelectorAll('.baby__text')



let splitText = (el) => {
    el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
  return `<div class="word">` +
            m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
            `</div>`;
    });
    return el;
};

function random(min, max){
    return (Math.random() * (max - min)) + min;
  }

let split 


/////////////////

// let tl = gsap.timeline()

// tl.fromTo('.logo',{
   
//     duration: 0,
//     opacity: 0,
    
// },{
//    opacity: 1,
//    duration: 2,

// }).fromTo('.nav__list-link' ,{
//     duration: 0,
//     opacity: 0,

// },{
    
//    opacity: 1,
//    duration: 2,

// }).fromTo('.header__title',{
//     duration: 0,
//     opacity: 0,

// },{
    
//    opacity: 1,
//    duration: 2,

// })


////////////logo


split = splitText(logo)

Array.from(split.querySelectorAll('.letter')).forEach((el,idx) =>{
    TweenMax.from(el, 1,{
        
        opacity: 0,
        y:random(  200,200),
        delay: idx * 0.1,
        repeat: 0,
        duration: 2,
        
    })
});




////////////head-nav

headNav.forEach( function(item){
    
        split = splitText(item)
   
       
            Array.from(split.querySelectorAll('.letter')).forEach((el,idx) =>{
                TweenMax.from(el, 1,{
                    
                    opacity: 0,
                    y:random(200,200),
                    delay: idx * 0.1,
                    repeat: 0,
                   
                })
            }) 
    
   
    
})



/////////////header-title


split = splitText(headTitle)

Array.from(split.querySelectorAll('.letter')).forEach((el,idx) =>{
    TweenMax.from(el, 1,{
        
        opacity: 0,
        y:random(200,300),
        delay: idx * 0.1,
        repeat: 0,
       
    })
})  



/////////header-text

headText.forEach( function(item){

    split = splitText(item)
    Array.from(split.querySelectorAll('.letter')).forEach((el,idx) =>{
        TweenMax.from(el, 0.1,{
           
            opacity: 0,
            delay: idx * 0.1,
            repeat: 0,
            
        })
    })   

});
    
 
  


///////////////section-link


    gsap.from('.header__link',{
        duration: 3,
        opacity:0,

    });
 
////////////baby-title

    
split = splitText(babyTitle)
 
Array.from(split.querySelectorAll('.letter')).forEach((el,idx) =>{
    TweenMax.from(el, 1,{
        
        opacity: 0,
        x:random(  -200,-200),
        delay: idx * 0.1,
        repeat: 0,
        
    })
});


/////////////babyTopText


babyTopText.forEach( function(item){
   
    split = splitText(item)

    Array.from(split.querySelectorAll('.letter')).forEach((el,idx) =>{
        TweenMax.from(el, 1,{
            
            opacity: 0,
            y:random(200,300),
            delay: idx * 0.1,
            repeat: 0,
           
        })
    }) ;  
    
})


/////////////babyText


babyText.forEach( function(item){
   
    split = splitText(item)

    Array.from(split.querySelectorAll('.letter')).forEach((el,idx) =>{
        TweenMax.from(el, 0.1,{
            
            opacity: 0,
            delay: idx * 0.1,
            repeat: 0,
           
        })
    }) ;  
    
})


//////////////runningline

gsap.from('.running-line__text',{
   
    opacity : 0,
    duration: 3,
    
}) 

gsap.to('.running-line__text',{
   
    
    x: -2800,
    duration: 3,
}) 

//////////////about
   
    gsap.to('.about-bg__img',{
       
        y:7500,
        scale: 25,
        duration: 3,
        opacity: 0,
    }) 
   
////////////////////////////


gsap.to('.header__inner',{
    scrollTrigger:{
        trigger: '.header',
        markers: true,
        start: 'top top'
    },
    
})


