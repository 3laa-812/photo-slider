//get image in array | array.from
const sliderImage = Array.from(document.querySelectorAll('img'));

//get number of slides
const slidesCount = sliderImage.length;

//set current index
var currentIndex = 1;

//slide number element
const slideNumElement = document.querySelector("#slide-number");

//prev and next button
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

// handle click on prev an next btn
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;


//creat main ul elemnt
const paginationelement = document.createElement('ul');
paginationelement.setAttribute('id','pagination-ul');

//creat li based on slides lenth

for(var i = 1; i <= slidesCount; i++){
    const paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);

    //set item content
    paginationItem.appendChild(document.createTextNode(i));

    //append item to the main ui
    paginationelement.appendChild(paginationItem);
}

//add the created ul to main page
document.getElementById('indicator').appendChild(paginationelement);

//get the neew ul
var newUl = document.getElementById('pagination-ul');

//get pagination item in array | array.from
const paginationBullets = Array.from(document.querySelectorAll('li'));

//loop through all bullets item
for(var i = 0; i < paginationBullets.length; i++){
    paginationBullets[i].onclick = function (){
        currentIndex = parseInt(this.getAttribute('data-index'));
        theCkecker();
    }
}

theCkecker();


//next slide function
function nextSlide(){

    if(nextBtn.classList.contains('disable')){
        return;
    }
    else{
        currentIndex++;
        theCkecker();
    }
}
function prevSlide(){
    if(prevBtn.classList.contains('disable')){
        return;
    }
    else{
        currentIndex--;
        theCkecker();
    }
}

//creat checker function
function theCkecker(){
    //set the slide num
    slideNumElement.textContent = 'slide#' + (currentIndex) + ' of ' +(slidesCount);


    //remove all active classes
    removeActive();



     //set active class on current slide
    sliderImage[currentIndex - 1].classList.add('active');
    //set active class on pagination item
    newUl.children[currentIndex - 1].classList.add('active');

    //check if current slide is first
    if(currentIndex == 1){
        prevBtn.classList.add('disable');
    }
    else{
        prevBtn.classList.remove('disable');
    }

        //check if current slide is last
        if(currentIndex == slidesCount){
            nextBtn.classList.add('disable');
        }
        else{
            nextBtn.classList.remove('disable');
        }
}

//remove all active classes
function removeActive(){

    //loop through images
    sliderImage.forEach(function (img){
        img.classList.remove('active');
    });
    //loop through pagination
    paginationBullets.forEach(function (bullet){
        bullet.classList.remove('active');
    })
}