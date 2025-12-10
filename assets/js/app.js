import {Products, sidebarDeskLinks} from './data.js'

const ToggleSidebar = document.getElementById('ToggleSidebar')
const sidebar = document.getElementById('sidebar')
const overlyMobile = document.getElementById('overlyMobile')
const CloseSidebar = document.getElementById('CloseSidebar')
const sidebarDeskClose = document.getElementById('sidebarDeskClose')
const ToggleMenu = document.getElementById('ToggleMenu')
const products = document.getElementById('products')


const ToggleSidebarFunc = () => {
   sidebar.classList.toggle('open')
   if (sidebar.classList.contains('open')) {
        addOverlyMobile()
   } else {
    removeOverlyMobile()
   }
}
ToggleSidebar.addEventListener('click', () => {
    ToggleSidebarFunc()
})
CloseSidebar.addEventListener('click', () => {
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

let SidebarIcon = ToggleMenu.querySelector('i')

const sidebarDeskCloseFunc = () => {
    document.body.classList.toggle('sidebarClose')
    if (document.body.classList.contains('sidebarClose')) {
        SidebarIcon.classList.remove("fa-xmark")
        SidebarIcon.classList.add("fa-bars")
    } else {
         SidebarIcon.classList.remove("fa-bars")
         SidebarIcon.classList.add("fa-xmark")
    }
}

ToggleMenu.addEventListener('click', () => {
    sidebarDeskCloseFunc()
})


//  Append product in product list
Products.forEach((product, index) => {
    let createProduct = document.createElement('div')
    createProduct.classList.add('product')

    createProduct.innerHTML =  `<div class="product-header">
                            <div class="product-image">
                                <div class="product-image-header">
                                    <button class="LikeProduct"><i class="fa-regular fa-heart"></i></button>
                                </div>
                                <img src="imgs/${product.product_image}" alt="">
                            </div>
                        </div>
                        <div class="product-footer">
                            <div class="product-details">
                                <div class="price-defign">
                                    <div class="price">${product.price}$</div>
                                    <div class="offer">${Math.floor(((product.old_price - product.price) / product.old_price) * 100) < 1 ? "" : Math.floor(((product.old_price - product.price) / product.old_price ) * 100) + '% OFF'} <i class="fa-solid fa-tag"></i></div>
                                </div>
                                <div class="product-footer-content">
                                    <div class="title">Lorem ipsum dolor sit amet consectetur ectetur!</div>
                                    <div class="product-model">${product.model ? 'Model: ' + product.model : ''}</div>
                                    <div class="action-btns">
                                        <div class="solding-products">
                                            <div class="location">${product.location ? `<i class="fa-solid fa-location-dot"></i>` + product.location : ""}</div>
                                            <div class="sold"><span class="SoldText"><i class="fa-solid fa-bag-shopping"></i>Sold</span><span class="SoldQuantity">${product.sold}</span></div>
                                        </div>
                                        <div class="actions">
                                            <div class="select-quan">
                                                <select name="selectQuantity" class="SelectQuantity">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                            <button class="AddToCartBtn" data-product-name="${product.name}">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;

    products.appendChild(createProduct)
})
const SeeAllTopDepertmentsbtn = document.querySelectorAll('.SeeAllTopDepertmentsbtn')
const AllTopdepartments = document.querySelector('.All-topdepartments')

SeeAllTopDepertmentsbtn.forEach(btn => {
    btn.addEventListener('click', () => {
    btn.style.display = "none"
    
    SeeAllTopDepertmentsbtn.forEach((OthBtn) => {
        if (OthBtn !== btn) {
            OthBtn.style.display = "block"
        }
    })

    AllTopdepartments.classList.toggle('open')

})


})
const sidebarContentLinks = document.getElementById('sidebarContentLinks')

sidebarDeskLinks.forEach((linkItem, index) => {
    let createData = document.createElement('div')
    createData.classList.add('sidebarDeskLinksUl')
    createData.innerHTML = `
        <div class="sidebarDeskLinksWraper">
            <p>${linkItem.name}</p>
            <ul class="sidebarDeskLinksUL1">

            </ul>
        </div>
    `
    sidebarContentLinks.appendChild(createData)

    const createDataUlSelect = createData.querySelector('.sidebarDeskLinksUL1')
    linkItem.links.forEach((links, index) => {
        let createDataL = document.createElement('li')
        createDataL.innerHTML =  `
            <button>
                <span>${links.name.length > 15 ? links.name.slice(undefined, 10) + '...' : links.name}</span>
                <div class="${links.name.length > 15 ? links.StatusNow.toLowerCase() + "Space" : links.StatusNow.toLowerCase()}">${links.name.length > 15 ? "" : links.StatusNow.toLowerCase()}</div>
            </button>
        `
        createDataUlSelect.appendChild(createDataL)
    })
})
const headerWraper = document.getElementById('headerWraper')
const UpDownHeader = document.getElementById('UpDownHeader')
const headerRow1 = document.querySelector(".header-row1")
const headerRow2 = document.querySelector(".header-row2")
const headerRow3 = document.querySelector(".header-row3")
const headerRow4 = document.querySelector(".header-row4")
const headerRow5 = document.querySelector(".header-row5")
const headerRow6 = document.querySelector(".header-row6")

const CloseHeader = document.getElementById('CloseHeader')

const DownUpHeader = () => {
    headerWraper.classList.toggle('close')
    if (headerWraper.classList.contains('close')) {
        headerRow1.style.display = "none"
        headerRow2.style.display = "none"
        headerRow3.style.display = "none"
        headerRow4.style.display = "none"
        headerRow5.style.display = "none"
        headerRow6.style.display = "flex"
    
    } else {
        headerRow1.style.display = "flex"
        headerRow2.style.display = ""
        headerRow3.style.display = "flex"
        headerRow4.style.display = "flex"
        headerRow5.style.display = "flex"
        headerRow6.style.display = "none"
       
       
    }
}
UpDownHeader.addEventListener('click', () => {
    DownUpHeader()
})
CloseHeader.addEventListener('click', () => {
    DownUpHeader()
})
window.addEventListener('resize', () => {
    if (window.innerWidth >= 600) {
        headerWraper.classList.remove('close')
        headerRow1.style.display = "flex"
        headerRow2.style.display = ""
        headerRow3.style.display = "flex"
        headerRow4.style.display = "none"
        headerRow5.style.display = "flex"
        headerRow6.style.display = "none"
    } else {
        headerRow4.style.display = "flex"
    }
})

const BtnProduct = document.querySelectorAll('.AddToCartBtn')
   BtnProduct.forEach(btn => {
     btn.addEventListener('click', () => {
        alert("This feature is coming soon.")
        btn.style.background = "rgb(255, 119, 0)"
        BtnProduct.forEach(iBtn => {
            if (iBtn !== btn) {
                iBtn.style.background = "rgb(255, 191, 0)"
            } 
        })
    })
   })

const suggestBtnsWraper = document.querySelector('.suggest-btns-wraper')
let suggestBtnSelect = suggestBtnsWraper.querySelectorAll('button')

suggestBtnSelect.forEach(suggbtn => {
    suggbtn.addEventListener('click', () => {
        suggbtn.style.background = "rgba(255, 255, 255, 0.132)"
        suggestBtnSelect.forEach(suggbtn2 => {
            if (suggbtn2 !== suggbtn) {
                suggbtn2.style.background = "rgba(255, 255, 255, 0)"
            }
        })
    })
})