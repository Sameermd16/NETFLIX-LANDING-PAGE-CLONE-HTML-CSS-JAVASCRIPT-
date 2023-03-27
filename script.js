const tabItems = document.querySelectorAll('.tab_item')
const tabContentItems = document.querySelectorAll('.tab_content_item')

//select tab content item
function selectItem(e) {
    removeBorder()
    removeShow()
    //add borter to current tab
    this.classList.add('tab_border')
    //grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}_content`)
    //add show class
    tabContentItem.classList.add('show')
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab_border'))
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}
//listen for the tab click 
tabItems.forEach(item => item.addEventListener('click', selectItem))