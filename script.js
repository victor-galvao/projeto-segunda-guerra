const tabMenu = document.querySelectorAll('.js-tabmenu div');
const tabContent = document.querySelectorAll('.js-tabcontent div');


  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
    tabContent.forEach((section) => {
    section.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index) => {  
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  })
})
}