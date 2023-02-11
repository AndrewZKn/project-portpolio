/*--------------------------------hide/show navigation---------------------------------------------- */
const openNav = document.querySelector('.navigation__ocean-name')
const anchorO = document.querySelector('.navigation__ocean-image')
const closeNav = document.querySelector('.navigation__choose-name')
const anchorC = document.querySelector('.navigation__choose-image')

function showNavigation(){
    const navclose = document.querySelector('.navigation__choose')
    navclose.classList.toggle('block')    
}
function hiddenNavigation(){
    const navclose = document.querySelector('.navigation__choose')
    navclose.classList.toggle('block')  
}
anchorO.addEventListener('click',showNavigation)
anchorC.addEventListener('click',hiddenNavigation)
openNav.addEventListener('click',showNavigation)
closeNav.addEventListener('click',hiddenNavigation)
/*--------------------------------hide/show navigation---------------------------------------------- */
