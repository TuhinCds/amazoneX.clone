const ToggleSidebar = document.getElementById('ToggleSidebar')
const sidebar = document.getElementById('sidebar')
const overlyMobile = document.getElementById('overlyMobile')
const CloseSidebar = document.getElementById('CloseSidebar')
const ToggleSidebarFunc = () => {
   sidebar.classList.toggle('open')
   if (sidebar.classList.contains('open')) {
        addOverlyMobile()
   }
}
ToggleSidebar.addEventListener('click', () => {
    ToggleSidebarFunc()
})
const addOverlyMobile = () => {
    overlyMobile.classList.add('active')
}
const removeOverlyMobile = () => {
    overlyMobile.classList.remove('active')
}
const ClickOverly = () => {
    sidebar.classList.remove('open')
    removeOverlyMobile()
}
overlyMobile.addEventListener('click', () => {
    ClickOverly()
})