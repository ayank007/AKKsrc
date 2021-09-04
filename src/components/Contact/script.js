// sidebar
$('.logo').click(function(){
    window.location.href='/';
});
const hamBox=document.querySelector('.hamBox');
const ham=document.querySelector('.hamburger');
var check=isMobileDevice();
if(check){
    $('.cursor-follower').addClass('noDisplay');
    $('.cursor').addClass('noDisplay');
}
else{
    $('.cursor-follower').removeClass('noDisplay');
    $('.cursor').removeClass('noDisplay');
    hamBox.addEventListener('mousemove', e =>{
        ham.style.setProperty('--x',`${e.pageX - window.innerWidth + 80}px`);
        ham.style.setProperty('--y',`${e.pageY - window.pageYOffset}px`);
    });
}
hamBox.addEventListener('mouseenter',function(){
    ham.style.setProperty('--bg',`black`);
    $('.cursor-follower').css('display','none');
    $('.cursor').css('display','none');
});
hamBox.addEventListener('mouseleave',function(){
    ham.style.setProperty('--x',`50%`);
    ham.style.setProperty('--y',`50%`);
    ham.style.setProperty('--bg',`white`);
    $('.cursor-follower').css('display','block');
    $('.cursor').css('display','block');
});

$('.hamBox').click(function(){
    if(document.getElementById('Navbar').classList.contains('opened')){
        $('#Navbar').removeClass('opened');
        $('.hamburger').removeClass('opened');
        setTimeout(function(){
            $('#Navbar').addClass('putBehind');
        },300);
        document.querySelectorAll('.nav1con ul li').forEach(function(link){
            link.style.animation='';
        });
    }
    else{
        $('#Navbar').addClass('opened');
        $('#Navbar').removeClass('putBehind');
        $('.hamburger').addClass('opened');
        document.querySelectorAll('.nav1con ul li').forEach(function(link,index){
            link.style.animation=`navLinkFade 0.5s ease forwards ${0.3 + index / 11}s`;
        });
    }
});
// function query580(x){
//     if(x.matches){
//     }else{
//     }
// }
// var mq580 = window.matchMedia("(max-width: 580px)")
// query580(mq580);
// mq580.addListener(query580);
function isMobileDevice(){
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};
// loader
var loader=document.getElementById('loading');
function removeLoader(){
    setTimeout(function(){
        loader.style.display='none';
        $('body').removeClass('noScroll');
    }, 700);
}
// cursor
var cursor = $(".cursor"),
    follower = $(".cursor-follower");
var posX = 0,
    posY = 0;
var mouseX = 0,
    mouseY = 0;
TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        TweenMax.set(follower, {
            css: {
                left: posX - 12,
                top: window.pageYOffset + posY - 12
            }
        });
        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: window.pageYOffset + mouseY
            }
        });
    }
});
$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
$(".link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});
$(window).on('scroll',e=>{
    if($(window).scrollTop()>200){
        $('.goToTop').addClass('active');
    }
    else{
        $('.goToTop').removeClass('active');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});







// heading 
$('.logo').click(function(){window.location.href='/'});
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];
        if(this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }
        else{
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        let typeSpeed = 110;
        if(this.isDeleting) {
            typeSpeed /= 2;
        }
        if(!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        }
        else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 110;
        }
        setTimeout(() => this.type(), typeSpeed);
    }
}
document.addEventListener('DOMContentLoaded', init);
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}

// service
var service = new Swiper('.swiper-container-service', {
    slidesPerView: 1,
    autoplay: {
        delay: 220000,
        disableOnInteraction: false,
    },
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.service-next',
        prevEl: '.service-prev',
    },
});
service.on('slideChange',function(){
    if (service.activeIndex == 4 || service.activeIndex == 1) {
        $('.serviceHead').html(`<span>1/3</span> IT Strategy and Consulting`);
    }
    else if (service.activeIndex == 2) {
        $('.serviceHead').html('<span>2/3</span> Design & Development');
    }
    else if (service.activeIndex == 3 || service.activeIndex == 0) {
        $('.serviceHead').html('<span>3/3</span> Digital Marketing');
    }
    TweenMax.to('#Service .imgbg',0,{
        x:'20px',opacity:0,scale:0.8,
    }),
    TweenMax.to('#Service .serviceTxt',0,{
        x:'-100%',opacity:0,
    });
    TweenMax.to('.serviceImg .layerbg',0,{
        width:'0%',display:'block',
    });
    TweenMax.to('.serviceImg .layerbg .layer',0,{
        width:'100%',
    });
    TweenMax.to('.serviceImg .layer2',0,{
        width:'100%',
    });
});
service.on('slideChangeTransitionEnd',function(){
    TweenMax.to('#Service .imgbg',1,{
        opacity:1,x:0,scale:1,
    }),
    TweenMax.to('#Service .serviceTxt',1,{
        opacity:1,x:0,
    });
    TweenMax.to('.serviceImg .layerbg',1,{
        width:'100%',display:'none',
    });
    TweenMax.to('.serviceImg .layerbg .layer',0.7,{
        width:'0%',delay:0.3,
    });
    TweenMax.to('.serviceImg .layer2',1,{
        width:'0%',
    });
});

$(".link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});
$("#OnDemand .link, #contact .link, #Support .link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("activeContact");
    follower.html('<span>Contact</span>');
});
$("#OnDemand .link, #contact .link, #Support .link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("activeContact");
    follower.html(null);
});
$("#Offerings .link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("activeContact");
    follower.html('Know More');
});
$("#Offerings .link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("activeContact");
    follower.html(null);
});
$("#Clients .link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("activeContact");
    follower.addClass("activeContactRed");
    follower.html('<span>Reviews</span>');
});
$("#Clients .link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("activeContactRed");
    follower.removeClass("activeContact");
    follower.html(null);
});
$("#Blog .link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("activeContact");
    follower.addClass("activeContactRed");
    follower.html('<span>Read More</span>');
});
$("#Blog .link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("activeContactRed");
    follower.removeClass("activeContact");
    follower.html(null);
});

// offerings
var offerHead = document.getElementsByClassName("offerHead");
for (let i = 0; i < offerHead.length; i++) {
    offerHead[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var offerBody = this.nextElementSibling;
        if(offerBody.style.maxHeight){
            offerBody.style.maxHeight = null;
            offerBody.style.padding = "0";
        }else {
            offerBody.style.maxHeight = offerBody.scrollHeight + 60 + "px";
            offerBody.style.padding = "30px 0";
        } 
    });
}
var offerDetailsHead = document.getElementsByClassName("offerDetailsHead");
for (let i = 0; i < offerDetailsHead.length; i++) {
    offerDetailsHead[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var offerDetailsBody = this.nextElementSibling;
        if(offerDetailsBody.style.maxHeight){
            offerDetailsBody.style.maxHeight = null;
        }else {
            offerDetailsBody.style.maxHeight = offerDetailsBody.scrollHeight + "px";
            offerDetailsBody.parentNode.parentNode.style.maxHeight = offerDetailsBody.scrollHeight + offerDetailsBody.parentNode.parentNode.scrollHeight + 60 + "px";
            offerDetailsBody.parentNode.parentNode.style.padding = "30px 0";
        } 
    });
}

// testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials

var our_clients=[];

function reviews(){
    var swiper2 = new Swiper('.swiper-container2', {
        slidesPerView: 1,
        autoplay:{
            delay:50000,
            disableOnInteraction: false,
        },
        lazy:true,
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: '.t-next',
            prevEl: '.t-prev',
        },
        loop:true,
    });
}

function addTestimonial(){
    fetch('./api/v1/review')
    .then(response=>response.json())
    .then(data=>{
        for(let i=0;i<data.length;i++){
            var from=our_clients[data[i]['fields']['client']-1];
            var r=data[i]['fields']['review'];
            addReview(r,from);
            reviews();
        }
    })
    .catch(err=>{
        console.log(err,'error showing the Testimonials');
    })
}
function addReview(r,from){
    var review=
    `<div class="swiper-slide">
        <div class="testimonial">
            <div class="TestimonialContent">
                <div class="middle">
                    <p>
                        <i class="fa fa-quote-left" aria-hidden="true"></i>&nbsp;
                        ${r}
                    </p>
                </div>
                <div class="head">
                    <h3>${from}</h3>
                </div>
            </div>
        </div>
    </div>`;
    
    $('.swiper-container2 .swiper-wrapper').append(review);
}
// client client client client client client client client client client client client client client client

function clients(){
    var swiper3 = new Swiper('.swiper-container3', {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        autoplay: {
            delay: 30000,
            disableOnInteraction: false,
        },
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper4 = new Swiper('.swiper-container4', {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        autoplay: {
            delay: 18000,
            disableOnInteraction: false,
        },
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper5 = new Swiper('.swiper-container5', {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        autoplay: {
            delay: 25000,
            disableOnInteraction: false,
        },
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper6 = new Swiper('.swiper-container6', {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        autoplay: {
            delay: 22000,
            disableOnInteraction: false,
        },
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
fetch('./api/v1/client')
.then(response=>response.json())
.then(data=>{
    if(data.length==2){
        $('.clients').append(`<div><div class="swiper-container4"><div class="swiper-wrapper"></div></div></div>`);
    }
    else if(data.length==3){
        $('.clients').append(`<div><div class="swiper-container4"><div class="swiper-wrapper"></div></div></div>`);
        $('.clients').append(`<div><div class="swiper-container5"><div class="swiper-wrapper"></div></div></div>`);        
    }
    else if(data.length>3){
        $('.clients').append(`<div><div class="swiper-container4"><div class="swiper-wrapper"></div></div></div>`);
        $('.clients').append(`<div><div class="swiper-container5"><div class="swiper-wrapper"></div></div></div>`);
        $('.clients').append(`<div><div class="swiper-container6"><div class="swiper-wrapper"></div></div></div>`);
    }
    for(let i=0;i<data.length;i++){
        var client_logo=data[i]['fields']['logo'];
        var client_name=data[i]['fields']['name'];
        addClient(i+1,client_logo,client_name);
        clients();
        our_clients.push(client_name);
    }
    addTestimonial();
    showInMonitor();
})
.catch(err=>{
    console.log(err,'error showing our Clients');
})

function addClient(index,img,name){
    img='https://makscube-bucket.s3.amazonaws.com/media/'+img;
    console.log(img);
    var client=
    `<div class="swiper-slide">
        <div class="recog">
            <img src="${img}" alt="recognition"/>
            <figcaption data-img="${img}" data-name="${name}">
                <p>${name}</p>
            </figcaption>
        </div>
    </div>`;
    if(index%4==1){
        $('.swiper-container3 .swiper-wrapper').append(client);
    }
    else if(index%4==2){
        $('.swiper-container4 .swiper-wrapper').append(client);
    }
    else if(index%4==3){
        $('.swiper-container5 .swiper-wrapper').append(client);
    }
    else{
        $('.swiper-container6 .swiper-wrapper').append(client);
    }
}

// partner partner partner partner partner partner partner partner partner partner partner partner partner

function partners(){
    var swiper8 = new Swiper('.swiper-container8', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: true,
        mousewheel: true,
        autoplay: {
            delay: 15000,
            disableOnInteraction: false,
        },
    });
    var swiper7 = new Swiper('.swiper-container7', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: true,
        mousewheel: true,
        autoplay: {
            delay: 15000,
            disableOnInteraction: false,
        },
    });
}

fetch('./api/v1/partner').
then(response=>response.json())
.then(data=>{
    let AP=0;
    let IP=0;
    for(let i=0;i<data.length;i++){
        var pName=data[i]['fields']['name'];
        var pType=data[i]['fields']['type'];
        var pLogo=data[i]['fields']['img'];
        if(pType==="Industrial-Partner"){
            IP+=1;
        }
        if(pType==="Academic-Partner"){
            AP+=1;
        }
        addPartner(pLogo,pName,pType);
    }
    if(AP==0){
        var Apartner=
        `<div class="swiper-slide">
            <div class="recog">
                <img src="/static/img/none.jpg" alt="None">
                <figcaption data-img="/static/img/none.jpg" data-name="No Partner Yet">
                    <p>No Partner Yet</p>
                </figcaption>
            </div>
        </div>`;
        $('.swiper-container7 .swiper-wrapper').empty();
        $('.swiper-container7 .swiper-wrapper').append(Apartner);
    }
    if(IP==0){
        var Ipartner=
        `<div class="swiper-slide">
            <div class="recog">
                <img src="/static/img/none.jpg" alt="None">
                <figcaption data-img="/static/img/none.jpg" data-name="No Partner Yet">
                    <p>No Partner Yet</p>
                </figcaption>
            </div>
        </div>`;
        $('.swiper-container8 .swiper-wrapper').empty();
        $('.swiper-container8 .swiper-wrapper').append(Ipartner);
    }
    partners();
    showInMonitor();
})
.catch(err=>{
    console.log(err,'error showing our Partners');
})

function addPartner(img,name,type){
    img='https://makscube-bucket.s3.amazonaws.com/media/'+img;
    if(type==="Industrial-Partner"){        var Ipartner=
        `<div class="swiper-slide">
            <div class="recog">
                <img src="${img}" alt="">
                <figcaption data-img="${img}" data-name="${name}">
                    <p>${name}</p>
                </figcaption>
            </div>
        </div>`;
        $('.swiper-container8 .swiper-wrapper').append(Ipartner);
    }
    else{
        var Apartner=
        `<div class="swiper-slide">
            <div class="recog">
                <img src="${img}" alt="${name}">
                <figcaption data-img="${img}" data-name="${name}">
                    <p>${name}</p>
                </figcaption>
            </div>
        </div>`;
        $('.swiper-container7 .swiper-wrapper').append(Apartner);
    }
}

// recognition recognition recognition recognition recognition recognition recognition recognition recognition

fetch('./api/v1/recognition')
.then(response=>response.json())
.then(data=>{
    for(let i=0;i<data.length;i++){
        var recog_img=data[i]['fields']['img'];
        var recog_name=data[i]['fields']['name'];
        addRecognition(recog_img,recog_name);
    }
    addRecognitionSlider();
    showInMonitor();
})
.catch(err=>{
    console.log(err,'error showing our recognitions');
})
function addRecognitionSlider(){
    var recognitions = new Swiper('.recognitions-container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: true,
        mousewheel: true,
        autoplay: {
            delay: 20000,
            disableOnInteraction: false,
        },
    });
}
function addRecognition(img,name){
    img='https://makscube-bucket.s3.amazonaws.com/media/'+img;
    var recog=`
    <div class="swiper-slide">
        <div class="recog">
            <img src="${img}" alt="recognition"/>
            <figcaption data-img="${img}" data-name="${name}">
                <p>${name}</p>
            </figcaption>
        </div>
    </div>`;
    $('.recognitions .swiper-wrapper').append(recog);
}

// monitor monitor monitor monitor monitor monitor monitor monitor monitor monitor monitor monitor monitor

function showInMonitor(){
    $('#Clients figcaption').click(function(){
        var name=$(this).attr("data-name");
        var img=$(this).attr("data-img");
        $('.content1').empty();
        $('.content1').append(`<img src="${img}" alt="${name}"/>`);
        $('.content1').append(`<div>${name}</div>`);
    });
}

// products projects products projects products projects products projects products projects products projects
fetch('./api/v1/project')
.then(response=>response.json())
.then(data=>{
    cp=0;
    ip=0;
    for(let i=0;i<data.length;i++){
        var upName=data[i]['fields']['name'];
        var upLink=data[i]['fields']['link'];
        var upImg=data[i]['fields']['image'];
        var upDes=data[i]['fields']['description'];
        var upType=data[i]['fields']['type'];
        
        addProject(i+1,upName,upLink,upImg,upDes,upType);
    }
    addClientProject();
    addInhouseProject();
})
.catch(err=>{
    console.log(err,'error showing our projects');
})
function addProject(index,name,link,img,des,type){
    img='https://makscube-bucket.s3.amazonaws.com/media/'+img;
    let color=getRandomInt(6);
    if(type==='Client'){
        var project=
        `<div class="swiper-slide p${color}">
            <img src="${img}" alt="">
            <div class="con stylishScroll">
                <h5>${name}</h5>
                <a href="${link}" target="_blank" class="link">View</a>
                <p>${des}</p>
            </div>
        </div>`;
        if(index<7){
            $('#clientPortfolioSlider').append(project);
        }
    }
    else{
        var project=
        `<div class="swiper-slide p${color}">
            <img src="${img}" alt="">
            <div class="con stylishScroll">
                <h5>${name}</h5>
                <a href="${link}" target="_blank" class="link">View</a>
                <p>${des}</p>
            </div>
        </div>`;
        if(index<7){
            $('#inhouseSlider').append(project);
        }
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function addClientProject(){
    var slider2 = $("#clientPortfolioSlider").lightSlider({
        slideMove: 1,
        mode: "slide",
        slideMargin: 100,
        speed: 1500,
        loop: true,
    });
    $('.cp-prev').on('click', function () {
        slider2.goToPrevSlide();
    });
    $('.cp-next').on('click', function () {
        slider2.goToNextSlide();
    });
    $("#clientPortfolioSlider .swiper-slide .con .link").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("activeContact");
        follower.addClass("activeContactRed");
        follower.html('<span>View</span>');
    });
    $("#clientPortfolioSlider .swiper-slide .con .link").on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("activeContact");
        follower.removeClass("activeContactRed");
        follower.html(null);
    });
}
function addInhouseProject(){
    var slider1 = $("#inhouseSlider").lightSlider({
        slideMove: 1,
        mode: "slide",
        slideMargin: 100,
        speed: 1500,
        loop: true,
    });
    $('.inhouse-prev').on('click', function () {
        slider1.goToPrevSlide();
    });
    $('.inhouse-next').on('click', function () {
        slider1.goToNextSlide();
    });
    $("#inhouseSlider .swiper-slide .con .link").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("activeContact");
        follower.addClass("activeContactRed");
        follower.html('<span>View</span>');
    });
    $("#inhouseSlider .swiper-slide .con .link").on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("activeContact");
        follower.removeClass("activeContactRed");
        follower.html(null);
    });
}
fetch('./api/v1/product')
.then(response=>response.json())
.then(data=>{
    for(let i=0;i<data.length;i++){
        var upName=data[i]['fields']['name'];
        var upLink=data[i]['fields']['demo'];
        var upImg=data[i]['fields']['image'];
        var upDes=data[i]['fields']['description'];
        addProduct(i+1,upName,upLink,upImg,upDes);
    }
    addProductSlider();
})
.catch(err=>{
    console.log(err,'error showing our Product');
})

function addProduct(index,name,link,img,des){
    let color=getRandomInt(6);
    img='https://makscube-bucket.s3.amazonaws.com/media/'+img;
    link='https://makscube-bucket.s3.amazonaws.com/media/'+link;
    var product=
    `<div class="swiper-slide p${color}">
        <img src="${img}" alt="">
        <div class="con stylishScroll">
            <h5>${name}</h5>
            <a href="${link}" target="_blank" class="link">View</a>
            <p>${des}</p>
        </div>
    </div>`;
    if(index<7){
        $('#productSlider').append(product);
    }
}
function addProductSlider(){
    var slider = $("#productSlider").lightSlider({
        slideMove: 1,
        mode: "slide",
        slideMargin: 100,
        speed: 1500,
        loop: true,
    });
    $('.product-prev').on('click', function () {
        slider.goToPrevSlide();
    });
    $('.product-next').on('click', function () {
        slider.goToNextSlide();
    });
    $("#productSlider .swiper-slide .con .link").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("activeContact");
        follower.addClass("activeContactRed");
        follower.html('<span>View</span>');
    });
    $("#productSlider .swiper-slide .con .link").on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("activeContact");
        follower.removeClass("activeContactRed");
        follower.html(null);
    });
}

// technology
$('.technologyDetail > div').not('.' + 'techFE').hide('0');
$('.technologySelection > div').on('click',function(){
    $('.technologySelection > div').removeClass('active');
    $(this).addClass('active');
    var value=this.getAttribute('data-tech');
    if(value == 'all'){
        $('.technologyDetail > div').not('.' + value).show('100');
    }
    else{
        $('.technologyDetail > div').not('.' + value).hide('100');
        $('.technologyDetail > div').filter('.' + value).show('100');
    }
});

// contact
function sendMail(){
    window.open(
        'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=business@makscube.in',
        '_blank'
    );
}
function requestCall(){
    var check=isMobileDevice();
    if(check){
        console.log('mobile');
        window.open(
            'tel:916290088603',
            '_blank'
        )
    }
}
function isMobileDevice(){
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};
function openMap(){
    window.open(
        'https://goo.gl/maps/1WDeVX6YwsNhABTv6',
        '_blank'
    )
}


