const filtroBTn = document.querySelector('.iconFiltro');
const closeBtn = document.querySelector('.closeBtn');
const respSidebar = document.querySelector('.respSidebar');

filtroBTn.addEventListener('click', function(){
    if(respSidebar.classList.contains('respSidebarOn')){
        respSidebar.classList.remove('respSidebarOn')
    }else{
        respSidebar.classList.add('respSidebarOn')
    }
})

closeBtn.addEventListener('click', function(){
    if(respSidebar.classList.contains('respSidebarOn')){
        respSidebar.classList.remove('respSidebarOn')}
})