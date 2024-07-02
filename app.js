const menu = document.querySelector('.mainMenu');
const menuBtn = document.querySelector('.menuBtn');

menuBtn.addEventListener('click', function(){
    if(menu.classList.contains('mainMenuResp')){
        menu.classList.remove('mainMenuResp')
    }else{
        menu.classList.add('mainMenuResp')
    }
})
