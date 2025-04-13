const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => { 
    //================ VISIBILIDADE DO MENU MOBILE ====================
   document.body.classList.toggle("show-mobile-menu");
});
//=================== FECHAR O MENU MOBILE  ====================
menuCloseButton.addEventListener("click", () => menuOpenButton.click()); 
    
