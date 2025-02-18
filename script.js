// kayar menü
const menuToggle = document.getElementById('navbuton');
const sideMenu = document.getElementById('sideMenu');


// Menüyü aç/kapat toggle fonksiyonu
menuToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Tıklamanın document'a ulaşmasını engelle
    if (sideMenu.style.left === "10px") {
        closeMenu();
    } else {
        openMenu();
    }
});

// Menü dışına tıklanınca kapatma
document.addEventListener('click', () => {
    if (sideMenu.style.left === "10px") {
        closeMenu();
    }
});

// Menüye tıklanınca document click'ini engelle
sideMenu.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Menü açma fonksiyonu
function openMenu() {
    sideMenu.style.left = "10px"; // Menüyü göster

    
    
}

// Menü kapama fonksiyonu
function closeMenu() {
    sideMenu.style.left = "-250px"; // Menüyü gizle
   
    
}

// scrolltop

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener("scroll", () => {
const scr= document.getElementById('scr')
if(window.scrollY > 10){
    scr.style.right="35px";
}else{
    scr.style.right="-35px";}

})
