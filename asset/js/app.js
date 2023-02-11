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
/*--------------------------------list product navigation------------------------------------------- */

const button = document.querySelectorAll('.work__project-show-item')
const navlist = document.querySelector('.work__project-show-list')
button.forEach((item)=>{
    const item1 = document.querySelector('.work__project-show-item:nth-child(1)')
    const item2 = document.querySelector('.work__project-show-item:nth-child(2)')
    const item3 = document.querySelector('.work__project-show-item:nth-child(3)')
    const item4 = document.querySelector('.work__project-show-item:nth-child(4)')
    
    let products = document.querySelectorAll('.work__project-show-title')
    const product1 = document.querySelector('.work__project-show-title:nth-child(1)')
    const product2 = document.querySelector('.work__project-show-title:nth-child(2)')
    const product3 = document.querySelector('.work__project-show-title:nth-child(3)')
    const product4 = document.querySelector('.work__project-show-title:nth-child(4)')
    products.forEach((product)=>{
        item.addEventListener('click',addRemove)
    function addRemove(){
        if(item == item1){
            item1.classList.add('magic-link')

            item1.classList.add('mb')
            item2.classList.remove('magic-link')
            item3.classList.remove('magic-link')
            item3.classList.remove('mb1')
            item4.classList.remove('magic-link')
            
            navlist.style.bottom = "0"
            item2.style.margin = "0"
            item3.style.top="0"
            // item4.style.margin ="0"
            // ///////
            product1.style.display = "block"
            product2.style.display = "none"
            product3.style.display = "none"
            product4.style.display = "none"


        }
        else{
            item1.classList.remove('magic-link')
            item1.classList.remove('nth')
            item1.classList.remove('mb')
            product1.style.display ="none"

        }
        if(item == item2){

            item1.classList.remove('magic-link')
            item1.classList.remove('nth')
            item2.classList.add('magic-link')
            item2.classList.add('mb')
            item3.classList.remove('magic-link')
            item4.classList.remove('magic-link')

            item1.style.margin = "0 0 100px 0"
            //
            navlist.style.bottom = "0"

            product1.style.display = "none"
            product2.style.display = "block"
            product3.style.display = "none"
            product4.style.display = "none"
        }
        else{
            item2.classList.remove('magic-link')
            item2.classList.remove('mb')
            product2.style.display = "none"

        }
        if(item == item3){
            item1.classList.remove('magic-link')
            item1.classList.remove('nth')
            item2.classList.remove('magic-link')
            item3.classList.add('magic-link')
            item3.classList.add('mb1')
            item4.classList.remove('magic-link')
            navlist.style.bottom ="171px"

            item2.style.margin = "0 0 100px 0"
            //////////
            item1.style.margin = "0 0 0px 0" 
            navlist.style.bottom = "0"
            product3.style.display = "block"
            product1.style.display = "none"
            product2.style.display = "none"
            product4.style.display = "none"
        }
        else{
            item3.classList.remove('magic-link')
            item3.classList.remove('mb1')
            product3.style.display = "none"


        }
        if(item == item4){
            item1.classList.remove('magic-link')
            item1.classList.remove('mb')
            item1.classList.remove('nth')
            item2.classList.remove('magic-link')
            item3.classList.remove('magic-link')
            item4.classList.add('magic-link-light')
            item4.classList.add('mt')
            //////////////
            item1.style.margin = "0 0 100px 0"
            item1.style.top = "400px"
            item2.style.margin = "0"
            navlist.style.bottom ="0"
            product1.style.display = "none"
            product2.style.display = "none"
            product3.style.display = "none"
            product4.style.display = "block"
        }
        else{
            item4.classList.remove('magic-link-light')
            item4.classList.remove('mt')
            product4.style.display = "none"

        }
    }



    })
    

            

           
    



})




