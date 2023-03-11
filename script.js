
var imgs = Array.from(document.querySelectorAll(".item img")) ;
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
 var cuurentIndex = 0 ;
 for(var i =0 ;  i<imgs.length ;  i++)
 {

   imgs[i].addEventListener("click", function(eventInfo){
    cuurentIndex =   imgs.indexOf(eventInfo.target);
    console.log(cuurentIndex);
    //
var imgSrc = eventInfo.target.getAttribute("src");
lightBoxItem.style.backgroundImage = "url("+imgSrc+")";
lightBoxContainer.style.display = "flex" ;
 } )
}

function nextSlider(){
    cuurentIndex++ ; 

    if(cuurentIndex == imgs.length){
        cuurentIndex=0;
    }

    var imgSrc = imgs[cuurentIndex].getAttribute("src");
lightBoxItem.style.backgroundImage = "url("+imgSrc+")";
}


function prevSlider(){
    cuurentIndex-- ; 
    if(cuurentIndex < 0){
        cuurentIndex = imgs.length -1;
    }

    var imgSrc = imgs[cuurentIndex].getAttribute("src");
lightBoxItem.style.backgroundImage = "url("+imgSrc+")";
}

function closeSlider()
{
    lightBoxContainer.style.display = "none" ;
}
nextBtn.addEventListener("click" , nextSlider) ;
prevBtn.addEventListener("click" , prevSlider) ;
closeBtn.addEventListener("click" , closeSlider) ;

document.addEventListener("keydown" ,function(eventInfo){
//    if(eventInfo.keyCode == 39) // ArrowRight
//    {
//     nextSlider();
//    }
//    else if(eventInfo.keyCode == 37)  // ArrowLeft
//    {
//     prevSlider();
//    }

//    else if(eventInfo.keyCode == 27) // Escape
//    {
//     closeSlider()
//    }

if(eventInfo.code == "ArrowRight")
{
    nextSlider();
}

if(eventInfo.code == "ArrowLeft")
{
    prevSlider();

}

if(eventInfo.code == "Escape")
{
    closeSlider()

}

})
