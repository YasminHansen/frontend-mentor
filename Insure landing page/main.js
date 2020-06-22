var windowWidth = window.innerWidth;

window.addEventListener("resize", verifyWindowSize);

if(windowWidth < 992){
    document.getElementById("image-mobile").classList.add('active');
    document.getElementById("menu-mobile-buttons").classList.add('active');
}
else{
    document.getElementById("image-desktop").classList.add('active');
    document.getElementById("menu-desktop").classList.add('active');
    document.getElementById("menu").classList.add('container');
    document.getElementById("banner-content").classList.add('container');
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
        document.getElementById("menu").classList.remove('container');
        document.getElementById("banner-content").classList.remove('container');
        if(windowWidth >= 991){
            document.getElementById("open-menu-mobile").style.display = "block";
        }
    }
    else{
        document.getElementById("image-desktop").classList.add('active');
        document.getElementById("menu-desktop").classList.add('active');
        document.getElementById("menu").classList.add('container');
        document.getElementById("banner-content").classList.add('container');
        document.getElementById("image-mobile").classList.remove('active');
        document.getElementById("menu-mobile-buttons").classList.remove('active');
        document.getElementById("menu-mobile").classList.remove('active');
        document.getElementById("close-menu-mobile").classList.remove('active');
        document.getElementById("content").classList.remove('block-scroll');
    }
}