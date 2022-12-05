var nav = document.querySelector('nav.header-left')
var iconNav = document.querySelector('.header-top-left .header-icon')
var listes = document.querySelectorAll('.header-left ul li')
var prev = document.getElementById("prev")
var next = document.getElementById("next")

/**
 * Objet contenant les gestionnaires d'évènements
 */
var listenerFunctions = {
    openNav: ()=>{
        nav.style.display = "block"
    },
    closeNav: ()=>{
        nav.style.display = "none"
    },
    nextSlide: ()=>{
        let index = slideIndex +1
        showSlide(index)
    },
    prevSlide: ()=>{
        let index = slideIndex - 1
        showSlide(index)
    },
    showAccordeonItem: (e)=>{
        let element = e.target;
        if (element.className) {
            //accordeon-title
            if (element.className === "accordeon-title") {
                element = element.parentNode
            }
            //accordeon-item            
        }else{
            element = (element.parentNode).parentNode
        }

        
        if (getComputedStyle(element.children[1]).display && getComputedStyle(element.children[1]).display === "none") {            
            element.children[1].style.display = "block"
        }else{
            element.children[1].style.display = "none"
        }
        element.classList.toggle("active")
    }
}


/**
 * Fonction qui réalise les abonnements
 */
var setupListeners = () =>{
    iconNav.onmouseover = listenerFunctions.openNav
    nav.onmouseleave = listenerFunctions.closeNav
    prev.onclick = listenerFunctions.prevSlide
    next.onclick = listenerFunctions.nextSlide
    for (let index = 0; index < listes.length; index++) {
        const li = listes[index];
        li.onclick = listenerFunctions.closeNav
    }
    
    var accordeon_items = document.querySelectorAll(".accordeon-item")

    for (let index = 0; index < accordeon_items.length; index++) {
        const accordeon_item = accordeon_items[index];

        accordeon_item.onclick =  listenerFunctions.showAccordeonItem
        
    }



}