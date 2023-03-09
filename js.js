// strat maine link in page
const main=document.getElementById("main");
main.addEventListener('click',() => {
    let link=document.querySelector(".link");
    link.classList.toggle("active");
    

    
    main.classList.toggle("active_menue");
    
})

// progrees scroll skills
let our = document.querySelector(".our");
let circk =document.querySelector(".circular-progress"),
 progressvalue=document.querySelector(".progress-valus");
 let one=document.getElementById("one");
 let onep=document.getElementById("onep");
 let two=document.getElementById("tow");
 let twop=document.getElementById("towp");
 let three=document.getElementById("three");
 let threep=document.getElementById("threep");
 
 
 let progreesendvalue=100;
 let progressstartvalue=0;
 let speed=100; 
 
       

let progrees =setInterval(() => {
    
    progressstartvalue++;
    progressvalue.textContent = `${progressstartvalue}%`
    
    circk.style.background = `conic-gradient(#07a57d ${progressstartvalue * 3.6}deg, #ededed 0deg)`;
    if(progressstartvalue == progreesendvalue)
    {
        clearInterval(progrees);
    }
}, speed);
    




let progressstartvaluone=0;
let progreesendvalueone=90,
speedone=100;
let progreesone =setInterval(() => {

    progressstartvaluone++;
    onep.textContent = `${progressstartvaluone}%`
    one.style.background = `conic-gradient(#07a57d ${progressstartvaluone * 3.6}deg, #ededed 0deg)`;
    if(progressstartvaluone == progreesendvalueone)
    {
        clearInterval(progreesone);
    }
}, speedone);


let progressstartvalutwo=0;
let progreesendvaluetwop=70,
speedtwo=100;
let progreestwo =setInterval(() => {

    progressstartvalutwo++;
    twop.textContent = `${progressstartvalutwo}%`
    two.style.background = `conic-gradient(#07a57d ${progressstartvalutwo * 3.6}deg, #ededed 0deg)`;
    if(progressstartvalutwo == progreesendvaluetwop)
    {
        clearInterval(progreestwo);
    }
}, speedtwo);


let progressstartvaluth=0;
let progreesendvaluethp=50,
speedth=100;
let progreesth =setInterval(() => {

   progressstartvaluth++;
    threep.textContent = `${ progressstartvaluth}%`
    three.style.background = `conic-gradient(#07a57d ${progressstartvaluone * 3.6}deg, #ededed 0deg)`;
    if( progressstartvaluth == progreesendvaluethp)
    {
        clearInterval(progreesth);
    }
}, speedth);

    const cont=document.getElementById("cont");
    let card=document.querySelectorAll(".card");
    window.onscroll = function () {
        if (window.scrollY >= cont.offsetTop )

            for(let i=0;i<card.length;i++)
            {
                card[i].style.top="0px";
                card[i].style.opacity=1;
            }
        
    }


         
     
