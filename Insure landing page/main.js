var windowWidth = window.innerWidth;

if(windowWidth < 992){
    document.getElementById("image-mobile").classList.add('active');
    document.getElementById("menu-mobile").classList.add('active');
}
else{
    document.getElementById("image-desktop").classList.add('active');
    document.getElementById("menu-desktop").classList.add('active');
}

function openMenuMobile(){
    document.getElementById("menu-mobile-options").classList.add('active');
    document.getElementById("close-menu-mobile").classList.add('active');
    document.getElementById("open-menu-mobile").style.display = "none";
}
function closeMenuMobile(){
    document.getElementById("menu-mobile-options").classList.remove('active');
    document.getElementById("close-menu-mobile").classList.remove('active');
    document.getElementById("open-menu-mobile").style.display = "block";
}