const btnOpen = document.querySelector('.menu-toggle');
const btnClose = document.querySelector('.close-hamburger');
const menu = document.querySelector('.hamburger');
btnOpen.addEventListener('click', () => {
    menu.classList.remove('hidden');
    document.body.style.overflow='hidden'
})
btnClose.addEventListener('click', () => {
    menu.classList.add('hidden');
    document.body.style.overflow='scroll'
})

const accordion = document.getElementsByClassName('contentBx');

        for (i = 0; i<accordion.length; i++){
            accordion[i].addEventListener('click', function(){
                this.classList.toggle('active')
            })
        }
const btn1 = document.querySelector('че нибудь') 

const btn2 = document.querySelector('че нибудь другое') 

btn1.addEventListener('click', () => {
   modal('класс модалки') 
}) 

btn2.addEventListener('click', () => {
   modal('класс другой мрдалки') 
}) 

// функция скпытия/показа модалки
function modal(selector) {
// селектим модалку
    const popup = document.querySelector(selector) 
   // меняем ее состояние  if(popup.classList.contains('hidden') {
   popup.classList.remove('hidden') 
} else {
   popup.classList.add('hidden')  
} 