var windowWidth = window.innerWidth;
var content = document.getElementsByClassName("content");

window.addEventListener("resize", verifyWindowSize);

if(windowWidth < 992){
    document.getElementById("image-mobile").classList.add('active');
    document.getElementById("menu-mobile-buttons").classList.add('active');
}
else{
    document.getElementById("image-desktop").classList.add('active');
    document.getElementById("menu-desktop").classList.add('active');
    document.getElementById("banner-content").classList.add('container');
    
    for(var i=0; i < content.length; i++){
        content.item(i).classList.add('container');
    }
}

function openMenuMobile(){
    document.getElementById("menu-mobile").classList.add('active');
    document.getElementById("close-menu-mobile").classList.add('active');
    document.getElementById("content").classList.add('block-scroll');
    document.getElementById("open-menu-mobile").style.display = "none";
}

function closeMenuMobile(){
    document.getElementById("menu-mobile").classList.remove('active');
    document.getElementById("close-menu-mobile").classList.remove('active');
    document.getElementById("content").classList.remove('block-scroll');
    document.getElementById("open-menu-mobile").style.display = "block";
}

function verifyWindowSize(){
    windowWidth = window.innerWidth;
    if(windowWidth < 992){
        document.getElementById("image-mobile").classList.add('active');
        document.getElementById("menu-mobile-buttons").classList.add('active');
        document.getElementById("image-desktop").classList.remove('active');
        document.getElementById("menu-desktop").classList.remove('active');
        document.getElementById("banner-content").classList.remove('container');
        if(windowWidth >= 991){
            document.getElementById("open-menu-mobile").style.display = "block";
        }

        for(var i=0; i < content.length; i++){
            content.item(i).classList.remove('container');
        }
    }
    else{
        document.getElementById("image-desktop").classList.add('active');
        document.getElementById("menu-desktop").classList.add('active');
        document.getElementById("banner-content").classList.add('container');
        document.getElementById("image-mobile").classList.remove('active');
        document.getElementById("menu-mobile-buttons").classList.remove('active');
        document.getElementById("menu-mobile").classList.remove('active');
        document.getElementById("close-menu-mobile").classList.remove('active');
        document.getElementById("content").classList.remove('block-scroll');

        for(var i=0; i < content.length; i++){
            content.item(i).classList.add('container');
        }
    }
}