
// smooth scroll animation
var navElementsList = document.querySelectorAll(".nav-menu a");
var interval;

for(let i = 0; i < navElementsList.length; i++){
    navElementsList[i].addEventListener("click", function (event){
        event.preventDefault();

        var targetSectionId = this.innerText.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);

        // interval = setInterval(smoothScroll, 10, targetSection);
        interval = setInterval(function (){
            smoothScroll(targetSection);
        }, 10);
    });
}


function smoothScroll (targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top <= 0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}





// skill bar auto fill animation 



// var progressBars = document.querySelectorAll(".skill-percent");
// var skillsContainer = document.getElementById("skills");
// window.addEventListener("scroll", checkScroll);
// var animationDone = false;

// //to make all progress bars 0
// function initialiseBars(){
//     for(let bar of progressBars){
//         bar.style.width = "0%";
//     }
// }
// initialiseBars();



// function fillBars(){
//     for(let i = 0; i < progressBars.length; i++){
//         let finalWidth = progressBars[i].getAttribute("data-skill-level");
//         let currentWidth = 0;
//         let fillingBars = setInterval(function (){
//             if(currentWidth >= finalWidth){
//                 clearInterval(fillingBars);
//                 return;
//             }
//             currentWidth ++;
//             progressBars[i].style.width = currentWidth + "%";
//         }, 5);
//     }
// }



// function checkScroll(){

//     //checking whether skill container is visible 
//     let skillsContainerCoordinates = skillsContainer.getBoundingClientRect();
//     if(!animationDone && skillsContainerCoordinates.top <= window.innerHeight){
//         animationDone = true;
//         console.log("skills section visible");
//         fillBars();
//     }else if(skillsContainerCoordinates.top > window.innerHeight){
//         animationDone = false;
//         initialiseBars();
//     }

// }






var progressBars = document.querySelectorAll(".skill-percent");

function initialiseBars (){
    for(let bar of progressBars){
        bar.style.width = "0%";
    }
}
initialiseBars();


function initialseBar(bar){
    bar.style.width = "0%";
}


function fillBar(bar){
    let finalWidth = bar.getAttribute("data-skill-level");
    let currentWidth = 0;
    let fillWidth = setInterval(function(){
        if(currentWidth >= finalWidth){
            clearInterval(fillWidth);
            return;
        }
        currentWidth ++;
        bar.style.width = currentWidth + "%";
    }, 10);
}


function scroll(){
    for(let bar of progressBars){
        let barCooridinates = bar.getBoundingClientRect();
        if( (bar.getAttribute("data-visited") == "false") && (barCooridinates.top <= (window.innerHeight - barCooridinates.height))){
            // console.log("visited");
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        }
        else if(barCooridinates.top > (window.innerHeight - barCooridinates.height)){
            bar.setAttribute("data-visited", false);
            initialseBar(bar);
        }
    }
}


window.addEventListener("scroll", scroll);













// percentage box
var percentBox = document.querySelector("#scrollBarPercent");
var documentHeight = document.body.getBoundingClientRect().height - window.innerHeight-1;
console.log("documentHeight = ", documentHeight);

window.addEventListener("scroll", function(){
    let currentScroll = window.scrollY;
    console.log(currentScroll);
    percentBox.innerText = parseInt(currentScroll*100/documentHeight);
});
