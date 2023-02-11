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
    
    const pcTablets1 =document.querySelector('.work__project-show-project:nth-child(1)')
    const pcTablets2 =document.querySelector('.work__project-show-project:nth-child(2)')
    const pcTablets3 =document.querySelector('.work__project-show-project:nth-child(3)')
    const pcTablets4 =document.querySelector('.work__project-show-project:nth-child(4)')

    const product1 = document.querySelector('.work__project-show-title:nth-child(1)')
    const product2 = document.querySelector('.work__project-show-title:nth-child(2)')
    const product3 = document.querySelector('.work__project-show-title:nth-child(3)')
    const product4 = document.querySelector('.work__project-show-title:nth-child(4)')
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

                pcTablets1.style.display = "block"
                pcTablets2.style.display = "none"
                pcTablets3.style.display = "none"
                pcTablets4.style.display = "none"

            }
            else{
                item1.classList.remove('magic-link')
                item1.classList.remove('nth')
                item1.classList.remove('mb')
                product1.style.display ="none"
                pcTablets1.style.display = "none"
            }
            if(item == item2){

                item1.classList.remove('magic-link')
                item1.classList.remove('nth')
                item2.classList.add('magic-link')
                item2.classList.add('mb')
                item3.classList.remove('magic-link')
                item4.classList.remove('magic-link')

                item1.style.margin = "0 0 100px 0"
                navlist.style.bottom = "0"

                product1.style.display = "none"
                product2.style.display = "block"
                product3.style.display = "none"
                product4.style.display = "none"


                pcTablets2.style.display = "block"
                pcTablets1.style.display = "none"
                pcTablets3.style.display = "none"
                pcTablets4.style.display = "none"
            }
            else{
                item2.classList.remove('magic-link')
                item2.classList.remove('mb')
                product2.style.display = "none"
                pcTablets2.style.display = "none"

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
                item1.style.margin = "0 0 0px 0" 
                navlist.style.bottom = "0"

                product3.style.display = "block"
                product1.style.display = "none"
                product2.style.display = "none"
                product4.style.display = "none"


                pcTablets3.style.display = "block"
                pcTablets1.style.display = "none"
                pcTablets2.style.display = "none"
                pcTablets4.style.display = "none"
            }
            else{
                item3.classList.remove('magic-link')
                item3.classList.remove('mb1')
                product3.style.display = "none"
                pcTablets3.style.display = "none"


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

                pcTablets4.style.display = "block"
                pcTablets1.style.display = "none"
                pcTablets2.style.display = "none"
                pcTablets3.style.display = "none"
            }
            else{
                item4.classList.remove('magic-link-light')
                item4.classList.remove('mt')
                product4.style.display = "none"
                pcTablets4.style.display = "none"

            }




        }


    
})
/*--------------------------------modal cetificate navigation------------------------------------------- */

function clickM(){
    const box = document.querySelector('.experiences__project-box:nth-child(2)')
    const certificate = document.querySelector('.experience__project-certificate')
    box.addEventListener('click', ()=>{
        certificate.classList.toggle('flex')
    })
    const closex = document.getElementById('fa-xmark')
    function closeModal(){
    certificate.classList.remove('flex')
    certificate.classList.add('none')
    }
    closex.addEventListener('click', closeModal)
    // //////////////////

    const next = document.querySelector('.experience__certificate-btn-right')
    const prev = document.querySelector('.experience__certificate-btn-left')
    next.addEventListener('click', clickNext)
    prev.addEventListener('click', clickPrev)
    let imgs = document.querySelectorAll('.experience__certificate-img')
    
    
    const tv = document.querySelector('.experience__certificate-tivi')
    const imgTv = tv.querySelector('.experience__certificate-tivi .experience__certificate-img')
    let currentIndex = 0
    function setImage(){
        imgTv.src = imgs[currentIndex].src 
        console.log(imgs[currentIndex].src)

    }

    function clickNext(){
        if (currentIndex == imgs.length - 1) {
            currentIndex = 0
        } else {currentIndex++}
    
        setImage()
    }

    function clickPrev(){
        if (currentIndex == 0) {
            currentIndex = imgs.length - 1}
        else {
            currentIndex--}
        setImage()

    }
    function switchImage(){
        imgs.forEach((img)=>{
            img.addEventListener('click',function(){
                imgTv.src = img.src
            })
        })
    }
    switchImage()
}
clickM()