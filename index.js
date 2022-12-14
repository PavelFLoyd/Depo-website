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